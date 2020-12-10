function PersonList(props) {
    const people =
        props.people
        && props.people.length !== 0
        ? props.people.map((person, index) => (
            <li key={`person-${index}`}>{ person.name }</li>))
        : null;

    if (!people) {
        return (
            <p>There are no people to list</p>
        );
    }

    return (
        <ul>
            { people }
        </ul>
    );
}

export default PersonList;
