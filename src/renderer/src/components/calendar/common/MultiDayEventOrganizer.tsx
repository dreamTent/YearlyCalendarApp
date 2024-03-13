function getRenderableEventsAndPositions(_calendarEvents: any, _allowedPerDay: number) {
    /* this function returns all the calnderEvents that can be rendered on the same day, by mapping out what can be rendered without overlapping with other days*/


    const calendarEventsDataMap: any[][] = Array.from({ length: 366 }, () => []);
    const renderableEvents: any[] = [];



    for (let i = 0; i < _calendarEvents.length; i++) {
        if (_calendarEvents[i].multiDay) {
            //get start and end
            let dayOfYearStart = getDayOfYear(new Date(_calendarEvents[i].start))
            console.log(_calendarEvents[i].start)
            console.log(new Date(_calendarEvents[i].start))
            let dayOfYearEnd = getDayOfYear(new Date(_calendarEvents[i].end))
            //check if there is space

            console.log(i);
            let isFree: boolean[] = Array.from({ length: _allowedPerDay }, () => true);
            for (let a = dayOfYearStart; a <= dayOfYearEnd; a++) {
                for (let k = 0; k <= _allowedPerDay; k++) {
                    if (calendarEventsDataMap[a][k] === undefined) {
                        //is ok
                    } else {
                        //already has something
                        isFree[k] = false;
                    }
                }
            }
            //check if there is any that is still free
            let wasAdded = false;
            for (let k = 0; k <= _allowedPerDay; k++) {
                if (isFree[k]) {
                    //is ok
                    wasAdded = true;
                    //add to map
                    for (let a = dayOfYearStart; a < dayOfYearEnd; a++) {
                        calendarEventsDataMap[a][k] = true;
                    }
                    //add to renderableEvents
                    _calendarEvents[i].listPosition = k
                    _calendarEvents[i].canRenderMultiEvent = true;
                    renderableEvents.push(_calendarEvents[i]);
                    break;
                }
            }
            if (wasAdded == false) {
                _calendarEvents[i].canRenderMultiEvent = false;
                renderableEvents.push(_calendarEvents[i]);
            }


        } else {
            renderableEvents.push(_calendarEvents[i]);
        }

    }




    return renderableEvents
}
const getDayOfYear = (date: any): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 1).getTime();

    return Math.floor((date.getTime() - startOfYear) / (1000 * 60 * 60 * 24));
}



export default getRenderableEventsAndPositions;

