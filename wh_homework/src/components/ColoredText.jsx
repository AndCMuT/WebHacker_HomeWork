function ColoredText({color}) {

    const style = {
        color: color
    }

    return (
        <>
            <p style={style}>Это цветной текст!</p>
        </>
    )
}
export default ColoredText