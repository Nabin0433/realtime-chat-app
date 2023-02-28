

const getUserProfile = (name) => {
    return 'https://xsgames.co/randomusers/avatar.php?g=pixel'
}

const timeStampConveterTotimeAgoPackage = (time) => new Date(time).getTime()

export {
    timeStampConveterTotimeAgoPackage,
    getUserProfile
}