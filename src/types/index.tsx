export interface Ticket {
    origin: string;          // Код аэропорта отправления
    origin_name: string;     // Название аэропорта отправления
    destination: string;     // Код аэропорта назначения
    destination_name: string; // Название аэропорта назначения
    departure_date: string;  // Дата отправления
    departure_time: string;  // Время отправления
    arrival_date: string;    // Дата прибытия
    arrival_time: string;    // Время прибытия
    carrier: string;         // Код авиакомпании
    stops: number;           // Количество пересадок
    price: number;           // Цена билета RUB
}

export interface TicketsResponse {
    tickets: Ticket[];
}

export interface CurrencyResponse {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: CurrencyRates;
}

export interface CurrencyRates {
    AED?: number;
    AFN?: number;
    ALL?: number;
    AMD?: number;
    ANG?: number;
    AOA?: number;
    ARS?: number;
    AUD?: number;
    AWG?: number;
    AZN?: number;
    BAM?: number;
    BBD?: number;
    BDT?: number;
    BGN?: number;
    BHD?: number;
    BIF?: number;
    BMD?: number;
    BND?: number;
    BOB?: number;
    BRL?: number;
    BSD?: number;
    BTC?: number;
    BTN?: number;
    BWP?: number;
    BYN?: number;
    BYR?: number;
    BZD?: number;
    CAD?: number;
    CDF?: number;
    CHF?: number;
    CLF?: number;
    CLP?: number;
    CNY?: number;
    CNH?: number;
    COP?: number;
    CRC?: number;
    CUC?: number;
    CUP?: number;
    CVE?: number;
    CZK?: number;
    DJF?: number;
    DKK?: number;
    DOP?: number;
    DZD?: number;
    EGP?: number;
    ERN?: number;
    ETB?: number;
    EUR?: number;
    FJD?: number;
    FKP?: number;
    GBP?: number;
    GEL?: number;
    GGP?: number;
    GHS?: number;
    GIP?: number;
    GMD?: number;
    GNF?: number;
    GTQ?: number;
    GYD?: number;
    HKD?: number;
    HNL?: number;
    HRK?: number;
    HTG?: number;
    HUF?: number;
    IDR?: number;
    ILS?: number;
    IMP?: number;
    INR?: number;
    IQD?: number;
    IRR?: number;
    ISK?: number;
    JEP?: number;
    JMD?: number;
    JOD?: number;
    JPY?: number;
    KES?: number;
    KGS?: number;
    KHR?: number;
    KMF?: number;
    KPW?: number;
    KRW?: number;
    KWD?: number;
    KYD?: number;
    KZT?: number;
    LAK?: number;
    LBP?: number;
    LKR?: number;
    LRD?: number;
    LSL?: number;
    LTL?: number;
    LVL?: number;
    LYD?: number;
    MAD?: number;
    MDL?: number;
    MGA?: number;
    MKD?: number;
    MMK?: number;
    MNT?: number;
    MOP?: number;
    MRU?: number;
    MUR?: number;
    MVR?: number;
    MWK?: number;
    MXN?: number;
    MYR?: number;
    MZN?: number;
    NAD?: number;
    NGN?: number;
    NIO?: number;
    NOK?: number;
    NPR?: number;
    NZD?: number;
    OMR?: number;
    PAB?: number;
    PEN?: number;
    PGK?: number;
    PHP?: number;
    PKR?: number;
    PLN?: number;
    PYG?: number;
    QAR?: number;
    RON?: number;
    RSD?: number;
    RUB?: number;
    RWF?: number;
    SAR?: number;
    SBD?: number;
    SCR?: number;
    SDG?: number;
    SEK?: number;
    SGD?: number;
    SHP?: number;
    SLE?: number;
    SLL?: number;
    SOS?: number;
    SRD?: number;
    STD?: number;
    SVC?: number;
    SYP?: number;
    SZL?: number;
    THB?: number;
    TJS?: number;
    TMT?: number;
    TND?: number;
    TOP?: number;
    TRY?: number;
    TTD?: number;
    TWD?: number;
    TZS?: number;
    UAH?: number;
    UGX?: number;
    USD?: number;
    UYU?: number;
    UZS?: number;
    VES?: number;
    VND?: number;
    VUV?: number;
    WST?: number;
    XAF?: number;
    XAG?: number;
    XAU?: number;
    XCD?: number;
    XDR?: number;
    XOF?: number;
    XPF?: number;
    YER?: number;
    ZAR?: number;
    ZMK?: number;
    ZMW?: number;
    ZWL?: number;
}