const state = {
    topBarShow: false,
    previewShow: false,
    editorShow: false,
    exitBtnShow: false,
    currentTab: 'profile',
    svgIds: ['id', 'work', 'book', 'heart', 'cup', 'phone'],
    user: {
        username: '',
        id: ''
    },
    resume: {
        config: [
            'profile', 'workHistory', 'education', 'projects', 'awards', 'contacts'
        ],
        profile: { 'name': '沈文豪', 'title': '前端工程师', 'city': '杭州', 'birth': '1994-7-27' },
        workHistory: [
            { 'company': '', 'content': '' }
        ],
        education: [
            { 'school': '', 'content': '' }
        ],
        projects: [
            { 'name': '', 'content': '' }
        ],
        awards: [
            { 'name': '', 'content': '' }
        ],
        contacts: [
            { 'contact': '手机', 'content': '15757821491' },
            { 'contact': 'QQ', 'content': '443878051' }
        ]
    }
}

export default state
