import React from "react";

const ProfileContext = React.createContext({
    edipi: "1542756108",
    photo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    unit: {
        id: "16AF/ACC/363ISWR/363ISRG/363ISS",
        insignia: "",
        offices: [
            {
                symbol: "SCOO",
                members: [
                    "1542756108"
                ]
            }
        ]
    }
});

const Profile = () => {
    const context = useContext(ProfileContext);
    return (
        <section>
            <ProfileContext.Consumer>
                { context => <img src={context.unitInsignia} /> }
            </ProfileContext.Consumer>
            <ServiceMember />
        </section>
    );
}

const Shop = (props) => {

}

const ServiceMember = (props) => {
    return (
        <section>
            <ProfileContext.Consumer>
                {
                    context => (
                        <>
                            <a href={ context.url }>
                                <img src={ context.image } />
                            </a>
                            <h1>{ context.fullName }</h1>
                            <p>{ context.userName }</p>
                            <Shop data={ context.data }/>
                        </>
                    )
                }
            </ProfileContext.Consumer>
        </section>
    );
}

function App() {
    return (
        <div className="app">

        </div>
    );
}

export default App;
