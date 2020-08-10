export function htmlToElement(htmlString, element='div') {
    const div = document.createElement(element)
    div.innerHTML = htmlString.trim()
    return div
}
