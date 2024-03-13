import Day from './Day'
function Month(_year: any, _month: any, _daysPerLine: any, _eventsPerDay: number, events: any) {
    const calendarEventsData: any[][] = Array.from({ length: new Date(_year, _month, 0).getDate() }, () => []);
    for (let i = 0; i < events.length; i++) {

        calendarEventsData[new Date(events[i].start).getDate() - 1].push(events[i])

    }


    const monthStyleCalc = {

        height: 'calc(' + Math.ceil(calendarEventsData.length / _daysPerLine) + ' * calc(12px * ' + _eventsPerDay + ' ))',
        marginBottom: '12px'
    }

    return (
        <>
            <div style={{ ...monthStyleCalc }}>
                <div className='sidewaysText' style={{ float: "left", height: "100%", width: "24px" }}>
                    {new Date(2009, _month - 1, 1).toLocaleString('default', { month: 'long' })}
                </div>
                <div style={{ backgroundColor: '#fff', border: '0px solid rgba(0, 0, 0, 1)', float: "left", width: "calc(100% - 38px)", boxShadow: '0px 0px 3px black' }}>
                    {calendarEventsData.map((item, index) => (
                        <>
                            {Day(_year, _month, _daysPerLine, _eventsPerDay, index + 1, item)}
                        </>
                    ))}

                </div >
            </div>
        </>

    )
}

export default Month;