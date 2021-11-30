import React from 'react'
import styles from '../styles/Components/Content.module.css'

function Content() {
    return (
        <div className={`${styles.content} `}>
            <h2>
                Designed for the future
            </h2>

            <section className={`${styles.content__section} ${styles['content__section-1']} flex gb-padding`}>
                <div className={`${styles.image}`}></div>
                <div className={`${styles.txt}`}>
                    <h3>Introducing an extensible editor</h3>
                    <p>
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.
                    </p>

                    <h3>Robust content management</h3>
                    <p>
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>

                </div>
            </section>


            <section className={`${styles.content__section} ${styles['content__section-2']}`}>
                <div className='gb-padding flex'>
                    <div className={`${styles.image}`}></div>
                    <div className={`${styles.txt}`}>
                        <h2>State of the Art Infrastructure</h2>
                        <p>
                            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>

                    </div>
                </div>
            </section>


            <section className={`${styles.content__section} ${styles['content__section-3']} flex gb-padding`}>
                <div className={`${styles.image}`}></div>
                <div className={`${styles.txt}`}>
                    <h3>Free, open, simple</h3>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>

                    <h3>Powerful tooling</h3>
                    <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>

                </div>
            </section>

        </div>
    )
}

export default Content









