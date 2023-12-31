import Image from 'next/image'

import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi earum reprehenderit nostrum. Incidunt optio reiciendis, eveniet animi vitae, mollitia voluptatibus dignissimos autem vero totam non, natus fugit esse alias?</p>
        <Image src='/Images/charizard.png' 
        width={300}
        height={300}
        alt='Charizard' />
    </div>
  )
}

export default About