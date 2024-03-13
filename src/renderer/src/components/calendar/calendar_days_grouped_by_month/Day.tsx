import React from 'react';
import CalendarEvent from '../common/Event'

function Day(_year: any, _month: any, _daysPerLine: any, _eventsPerDay: number, day: any, events: any) {
    let days: string[] = []
    for (let i = 1; i <= new Date(_year, _month, 0).getDate(); i++) {
        days.push("" + i);
    }

    let width = 'calc(calc(100% / ' + _daysPerLine + ') - 1px)'
    //borders

    let borderCalc = '0px 1px 1px 0px'
    if (day % _daysPerLine === 0) {
        borderCalc = '0px 0px 1px 0px'
    }


    if (Math.floor(days.length / _daysPerLine) < (day / _daysPerLine)) {
        borderCalc = '0px 1px 0px 0px'
    }
    if (day % _daysPerLine === 0 && Math.floor(days.length / _daysPerLine) < (day / _daysPerLine)) {
        borderCalc = '0px 0px 0px 0px'
    }

    const dayStyleCalc = {
        border: '1px solid rgba(140, 140, 140, 1)',
        borderWidth: borderCalc,

    }
    //Events
    const eventElements: { key: string, element: JSX.Element }[] = [];
    for (let i = 0; i < _eventsPerDay; i++) {
        if (typeof events[i] === 'undefined') {
            //no event
            //eventElements.push({ key: `${_year}-${_month}-${day}-${i}`, element: Event(_year, _month, i, day, _eventsPerDay, "", "") });
        } else {
            //event found
            eventElements.push({ key: `${_year}-${_month}-${day}-${i}`, element: CalendarEvent(_year, _month, i, day, _eventsPerDay, events[i]) });
        }


    }
    //day colour
    let dayColor = ''
    switch (new Date(_year, _month - 1, day).getDay()) {
        case 6:
            dayColor = 'rgb(213, 213, 213)'
            break;
        case 0:
            dayColor = 'rgb(213, 213, 213)'
            break;

        default:
            dayColor = 'rgb(244, 244, 244)'
            break;
    }
    //day color if day is today
    if (new Date(_year, _month - 1, day).getTime() == new Date().setHours(0, 0, 0, 0)) {
        // Add code here for today's color
        dayColor = 'rgb(90, 137, 227)'
    }
    const dayNameStyle = {
        backgroundColor: dayColor,

    }

    return (
        <>

            <div style={{ ...dayStyleCalc, float: 'left', width: width, height: 'calc(calc(12px * ' + _eventsPerDay + ') - 1px)', fontSize: '8px', backgroundColor: '#' + { _year } }}>

                <div className="dayListElement" style={{ ...dayNameStyle }}>
                    {day}<br />
                    {new Date(_year, _month - 1, day).toLocaleDateString('default', { weekday: 'short' })}
                </div>
                <div style={{ float: 'left', width: 'calc(100% - 17px)', height: '100%' }}>
                    {eventElements.map(({ key, element }) => (
                        <React.Fragment key={key}>
                            {element}
                        </React.Fragment>
                    ))}
                </div>



            </div >

        </>

    )
}

export default Day;