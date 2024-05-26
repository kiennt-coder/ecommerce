using Serilog;
using System.Text;
using StackExchange.Redis;
using System.Security.Claims;
using Microsoft.OpenApi.Models;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;

using CMS.Models;
using CMS.Services;
using CMS.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// Add swagger service
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "CMS Ecommerce Api", Version = "v1" });
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Token is required!",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement {
        {
            new OpenApiSecurityScheme {
                Reference = new OpenApiReference {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{}
        }
    });
});

// Add Serilog
builder.Host.UseSerilog((context, config) =>
{
    config.WriteTo.Console().MinimumLevel.Information();
    config.WriteTo.File(
        path: "Logs/ecommerce-cms-.txt",
        rollingInterval: RollingInterval.Day,
        rollOnFileSizeLimit: true
    ).MinimumLevel.Information();
    config.WriteTo.File(
        path: "Errors/ecommerce-cms-.txt",
        rollingInterval: RollingInterval.Day,
        rollOnFileSizeLimit: true
    ).MinimumLevel.Error();
});

// Add cors
builder.Services.AddCors(policy =>
{
    policy.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(
            "http://localhost:3000", "http://localhost:3000/",
            "https://ecommerce-omega-eosin.vercel.app", "https://ecommerce-omega-eosin.vercel.app/",
            "https://ecommerce-kienntcoders-projects.vercel.app", "https://ecommerce-kienntcoders-projects.vercel.app"
        );
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
        builder.AllowCredentials();
    });
});

// Add Controller service
builder.Services.AddControllers();

// Add database configuration
builder.Services.Configure<MongoDbSetting>(builder.Configuration.GetSection("MongoDb"));

// Add mail configuration
builder.Services.Configure<MailSetting>(builder.Configuration.GetSection("MailSmtp"));

// Add redis configuration
builder.Services.Configure<RedisSetting>(builder.Configuration.GetSection("RedisCache"));

// Add auth jwt configuration
builder.Services.Configure<AuthJwtSetting>(builder.Configuration.GetSection("AuthJwt"));

// Add database service
builder.Services.AddSingleton<IMongoContextSvc, MongoContextSvc>();
builder.Services.AddScoped<IUserDb, UserDb>();
builder.Services.AddScoped<IAccountDb, AccountDb>();

// Add redis service
ConfigurationOptions options = new ConfigurationOptions
{
    User = builder.Configuration["RedisCache:Username"],
    Password = builder.Configuration["RedisCache:Password"],
    AbortOnConnectFail = false,
    //list of available nodes of the cluster along with the endpoint port.
    EndPoints = {
        { builder.Configuration["RedisCache:Host"]!, builder.Configuration.GetValue<int>("RedisCache:Port") }
    },
};
builder.Services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect(options));
builder.Services.AddScoped<IRedisSvc, RedisSvc>();

// Add auth jwt service
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.Authority = builder.Configuration["AuthJwt:Domain"];
    options.Audience = builder.Configuration["AuthJwt:Audience"];
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidAudience = builder.Configuration["AuthJwt:Audience"],
        ValidIssuer = builder.Configuration["AuthJwt:Issuer"],
        ClockSkew = TimeSpan.Zero,
        NameClaimType = ClaimTypes.NameIdentifier,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["AuthJwt:Secret"]!)),
    };
});
builder.Services.AddScoped<IAuthJwtSvc, AuthJwtSvc>();

// Add mail service
builder.Services.AddScoped<IMailSvc, MailSvc>();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
app.UseSwagger();
app.UseSwaggerUI();
// }

app.UseRouting();
app.UseCors();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();