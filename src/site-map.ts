export type SiteMap = {
    readonly [key: string]: { title: string, url: string } | SiteMap | Function;
    // readonly [key: string]: string | Function | SiteMap;
};

const makeSiteMap = <T extends SiteMap>(siteMap: T): T => siteMap;

//page url with the title to be shown in the breadcrumbs
//when adding a page it should also be added it to the BreadcrumbsConfig and RouteProtectionRules

export const sitemap = makeSiteMap({
    home: { title: 'home', url: '/' },
    courses: {
        index: { title: 'courses', url: '/courses' },
        id: (id = '[category]') => { return { title: id, url: `/courses/${id}` } },
        courseDetails: (category_id = '[category]', course_id = '[course]') => { return { title: course_id, url: `/courses/${category_id}/${course_id}` } },
        video_player: (category_id = '[category]', course_id = '[course]') => { return { title: 'video_player', url: `/courses/${category_id}/${course_id}/video-player` } },
        quiz: (category_id = '[category]', course_id = '[course]') => { return { title: 'quiz', url: `/courses/${category_id}/${course_id}/quiz` } },
    },
    about_us: { title: 'about_us', url: '/about-us' },
    login: { title: 'login', url: '/login' },
    register: { title: 'register', url: '/register' },
    thank_you: { title: 'thank_you', url: '/thank-you' },
    partners: { title: 'partners', url: '/partners' },
    teachers: { title: 'teachers', url: '/teachers' },
    profile: { title: 'profile', url: '/profile' },
});