import Month from './Month'


import testCalendarData from '../../../assets/testCalendarData.json'





const events = testCalendarData.events



function Calendar(_year: number, _daysPerLine: number, _eventsPerDay: number) {





    const calendarEventsData: any[][] = Array.from({ length: 12 }, () => []);

    for (let i = 0; i < events.length; i++) {
        calendarEventsData[new Date(events[i].start).getMonth()].push(events[i])

    }
    console.log(calendarEventsData);

    return (
        <div style={{ width: 'calc(100% - 40px)', padding: '20px', float: 'left' }}>
            {calendarEventsData.map((item, index) => (
                Month(_year, index + 1, _daysPerLine, _eventsPerDay, item)
            ))}
        </div>

    )
}



export default Calendar;