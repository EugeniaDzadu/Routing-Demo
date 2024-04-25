const Card = ({children}) =>{
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center"


    }
    return(
        <>
           <div style={cardStyle}>{children}</div>
        </>
    )
}

export default Card;