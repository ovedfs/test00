import PropTypes from "prop-types";

const dato = {
  name: 'Adela',
  lastname: 'Torres'
}

const getNumber = () => 5

export const Hello = ({ title, number }) => {

  console.log(title);

  return (
    <>
      <div>{ dato.name }</div>
      <p>{ getNumber() }</p>
      <p>{ title }</p>
      <p>{ number }</p>
    </>
  )
}

Hello.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

Hello.defaultProps = {
  title: 'No hay título',
  number: 0
}