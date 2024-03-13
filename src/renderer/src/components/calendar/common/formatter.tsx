function formatter(title: string, formatterSettings: any) {



    for (let a = 0; a < formatterSettings.categories.length; a++) {

        for (let b = 0; b < formatterSettings.categories[a].filters.length; b++) {



            var reg = new RegExp(formatterSettings.categories[a].filters[b].regex, 'gi');
            title = title.replace(reg, function (str: string) {
                return '<a style="background-color:' + formatterSettings.categories[a].filters[b].highlightColor + '; color:black; float:left; padding: 0px 2px 0px 1px;">' + str + '</a>'


            });


        }


    }
    return title
}
export function getFirstColor(title: string, formatterSettings: any) {
    /* Returns the first matching highlight color, when nothing is found returns grey*/
    console.log(formatterSettings)
    const searchResultCurrent = {
        position: 1000000,
        color: 'grey'
    };
    /* for every categorie*/
    for (let a = 0; a < formatterSettings.categories.length; a++) {
        /* for every filter inside that categorie*/
        for (let b = 0; b < formatterSettings.categories[a].filters.length; b++) {



            var reg = new RegExp(formatterSettings.categories[a].filters[b].regex, 'gi');
            let searchPostitionTMP = title.search(reg);
            if (searchResultCurrent.position > searchPostitionTMP && searchPostitionTMP > -1) {
                searchResultCurrent.position = searchPostitionTMP;
                searchResultCurrent.color = formatterSettings.categories[a].filters[b].highlightColor
            }






        }


    }
    return searchResultCurrent.color
}



export default formatter;
