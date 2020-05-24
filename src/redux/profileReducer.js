const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    isHiding: true,
    profileInfo: [
        {id: 0, name: 'first_name', value: ''},
        {id: 1, name: 'last_name', value: ''},
        {id: 2, name: 'phone', value: ''},
        {id: 3, name: 'email', value: ''},
        {id: 4, name: 'birthday', value: ''},
        {id: 5, name: 'city', value: ''},
        {id: 6, name: 'avatar_logo', value: ''},
    ]

    //     {
    //     first_name: '',
    //     last_name: '',
    //     phone: '',
    //     email: '',
    //     birthday: '',
    //     city: '',
    //     avatar_logo: ''
    // }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                isHiding: false,
                profileInfo: action.profileInfo
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}
export const setProfile = (profileData) => {
    return {
        type: SET_PROFILE,
        profileInfo: profileData
    }
}


export default profileReducer
