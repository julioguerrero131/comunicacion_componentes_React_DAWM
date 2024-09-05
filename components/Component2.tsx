interface Config {
    value: String
}

export default function Component2( data: Config ) {
    return (
        <>  
            {/* 3.1. Muestra el valor del prop */}
            <p>Sibbling value: {data.value}</p>
        </>
    )
}