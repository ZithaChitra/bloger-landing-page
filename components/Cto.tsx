import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from '../styles/Components/Cto.module.css'


let cx = classNames.bind(styles)


interface CtoProps {
    name: string,
    href: string,
    transparent?: boolean
}

export class Cto extends React.Component<CtoProps> {
    render() {
        let transparent = this.props.transparent
        let cto_class = cx({
            'cto-w': transparent ? false : true,
            'cto-t': transparent ? true : false
        })

        return (
            <Link href={this.props.href}>
                <a className={`${styles.cto} ${cto_class} flex flex-ai-c flex-jc-c`}>
                    {this.props.name}
                </a>
            </Link>
        )
    }
}

export default Cto


