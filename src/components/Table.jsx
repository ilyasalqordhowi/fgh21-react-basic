import React from "react";

function Table() {
  const [data, setData] = React.useState([
    {
      id: 123,
      name: "kaesang",
      age: 19,
      gender: "laki-laki",
      isSmoker: true,
      cigarVariant: ["esse", ", ", "marlboro"],
    },
    {
      id: 1234,
      name: "antoni nugroho",
      age: 29,
      gender: "laki-laki",
      isSmoker: true,
      cigarVariant: ["marlboro"],
    },
  ]);
  function saveData(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    console.log(age);
    const gender = event.target.gender.value;
    const isSmoker = event.target.isSmoker.value;
    const cigarVariant = event.target.cigarVariant.value;

    const newData = [...data];
    newData.push({
      id: Math.round(Math.random() * 9999),
      name,
      age,
      gender,
      isSmoker,
      cigarVariant,
    });
    setData(newData);
  }
  return (
    <React.Fragment>
      <form onSubmit={saveData}>
        <div>
          <div>
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age"></input>
          </div>
          <div>
            <div>Gender</div>
            <input
              type="radio"
              id="male"
              value={"laki-laki"}
              name="gender"
            ></input>
            <label htmlFor="male">laki-laki</label>
            <input
              type="radio"
              id="female"
              value={"perempuan"}
              name="gender"
            ></input>
            <label htmlFor="female">perempuan</label>
          </div>
          <div>
            <div>is Smoker</div>
            <input type="radio" id="yes" name="isSmoker" value={"Ya"}></input>
            <label htmlFor="yes">Ya</label>
            <input type="radio" id="no" name="isSmoker" value={"Tidak"}></input>
            <label htmlFor="no">Tidak</label>
          </div>
          <div>
            <div>Cigar variant</div>
            <input type="checkbox" id="esse" name="cigarVariant"></input>
            <label htmlFor="esse">esse</label>
            <input type="checkbox" id="marlboro" name="cigarVariant"></input>
            <label htmlFor="marlboro">marlboro</label>
            <input type="checkbox" id="gudang" name="cigarVAriant"></input>
            <label htmlFor="gudang">Gudang garam</label>
          </div>
          <button type="submit">SAVE</button>
          <button type="reset">SAVE</button>
        </div>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Gender</th>
            <th>Perokok</th>
            <th>Jenis Rokok</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={"survey-" + item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.isSmoker}</td>
                <td>{item.cigarVariant}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Table;
