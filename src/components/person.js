const Person = (person) => {
    return (
      <div
        style={{
          background: person.color,
          border: "1px solid black",
        }}
        >
        Hello { person.name } ! you age is { person.age }.
        </div>
    )
}

export default Person;
   