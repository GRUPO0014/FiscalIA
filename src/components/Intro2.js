// Example of React Inline Arrow Functions (Funciona igual que las funciones)

const Intro2 = () => {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

const Intro5 = () => <div><h5>Texto descriptivo para una funcion de una sola linea</h5></div>

export { Intro2, Intro5 };
