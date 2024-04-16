// Common Type
export type Common = {
    Header: {
        Theme: {
            Light: string,
            Dark: string,
        },
        Menu: string,
        Notification: string,
    }
}

// Dashboard type
export type Dashboard = {
    Title: string,
    TotalBox: {
        User: {
            Title: string,
            Description: string,
        },
        Order: {
            Title: string,
            Description: string,
        },
        Sales: {
            Title: string,
            Description: string,
        },
        Pending: {
            Title: string,
            Description: string,
        },
    }
}

// Locale type
export type Locale = {
    common: Common,
    dashboard: Dashboard
}

// Resource Type
export type Resource = {
    en: Locale,
    vi: Locale
}