import testCalendarData from '../../../assets/testSettings.json'


function CategoryFilterTable() {
    for (let index = 0; index < testCalendarData.categories.length; index++) {
        if (testCalendarData.categories[index].showTableWithColors) {
            getTable(testCalendarData.categories[index].filters)
        }
    }

}
function getTable(elements) {
    return (
        <>
            {
                elements.map((item, index) => (
                    getFilter(item)
                ))
            }

        </>
    )
}


function getFilter(element) {
    return (
        <div>
            {element.title}
        </div>
    )
}
export default CategoryFilterTable;