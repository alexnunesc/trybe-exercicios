function About() {
  const name = 'Alex';
  const ul = <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>GIT/GitHub</li>
    <li>Shell</li>
  </ul>
  return (
    <div>{name} {ul}</div>
  )
}

export default About;