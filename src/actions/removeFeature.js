export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = feature => {
    console.log(feature, 'removeFeature')

    

    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}