export default function Card({ele}) {
    return (
        <div className="card" style={{ padding: "2vh", paddingRight: "25%", backgroundImage:`url(${ele.Images[0]})`,backgroundPosition: "right",backgroundRepeat:"no-repeat",backgroundSize:"350px 100%", boxShadow: '0 0 5px 2px rgba(255, 0, 0, 0.3)' }}>
            <div style={{ display: "flex", marginBottom: "3vh" }}>
                <div className="pic" style={{ height: "15vh", width: "5vw", marginRight: "1vw" }}><img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={ele.Images[1]} alt="" /></div>
                <div>
                    <h2 style={{ color: "white" }}>{ele.Title}</h2>
                    <div style={{ color: "#3585cc" }}>{ele.Year}, {ele.Director}</div>
                    <div style={{ display: "flex", marginTop: "2vh", gap: "1vw" }}>
                        <p style={{ border: "#292928 1px solid" }}>{ele.Runtime}</p>
                        <p style={{ color: "#778895" }} >{ele.Genre}</p>
                    </div>
                </div>
            </div>
            <p style={{ marginBottom: "5vh" }}>{ele.Plot}</p>
            <div className="icons">
                <i style={{ marginRight: "1.5vw" }} class="fa-solid fa-share-nodes"></i>
                <i style={{ marginRight: "1.5vw" }} class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-message"></i>
            </div>

        </div>
    )
}