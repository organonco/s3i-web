export type SiteMap = {
    readonly [key: string]: { title: string, url: string } | SiteMap | Function;
    // readonly [key: string]: string | Function | SiteMap;
};

const makeSiteMap = <T extends SiteMap>(siteMap: T): T => siteMap;

//page url with the title to be shown in the breadcrumbs
//when adding a page it should also be added it to the BreadcrumbsConfig and RouteProtectionRules

export const sitemap = makeSiteMap({
    home: { title: 'home', url: '/' },
    courses: { title: 'courses', url: '/courses' },
    about_us: { title: 'about_us', url: '/about-us' },
    login: { title: 'login', url: '/login' },
    register: { title: 'register', url: '/register' },
    id: (id = '[category-id]') => { return { title: id, url: `/${id}` } },
    thank_you: { title: 'thank_you', url: '/thank-you' }
});