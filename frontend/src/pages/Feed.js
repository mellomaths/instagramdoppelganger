import React, { Component } from 'react';

import './feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Matheus Mello</span>
                            <span className="place">Rio de Janeiro</span>
                        </div>

                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/204781.jpg" />

                    <footer>
                        <div className="actions">
                            <img src={like} />
                            <img src={comment} />
                            <img src={send} />
                        </div>

                        <strong>900 likes</strong>
                        <p>
                            Um post muito massa
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Matheus Mello</span>
                            <span className="place">Rio de Janeiro</span>
                        </div>

                        <img src={more} alt="More" />
                    </header>

                    <img src="http://localhost:3333/files/204781.jpg" />

                    <footer>
                        <div className="actions">
                            <img src={like} />
                            <img src={comment} />
                            <img src={send} />
                        </div>

                        <strong>900 likes</strong>
                        <p>
                            Um post muito massa<span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}
