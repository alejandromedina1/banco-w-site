class Comment extends HTMLElement {
    constructor() {}

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <article id="comment">
            <p id="comment_user"> ${this.name}</p>
            <section id="comment_body">
            <div id="comment_img_container">
                    <img id="comment_img" src=${this.picture}>
                </div>
                <div id="comment_text">
                    <p id="comment_comment"> ${this.comment} </p>
                </div>
            </section>
            <section id="comment_reactions">
                <div id="comment_likes">
                    <i id='like' class="bi bi-heart"></i>
                    <p id="comment_number"> ${this.likes}</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
    `
        this.counter = this.querySelector('#comment_number');
        this.icon = this.querySelector('#like');

        if (this.likes) {
            this.counter.textContent = this.likes;
        }

        this.icon.addEventListener('click', () => {
            if (this.isChange) {
                this.icon.className = 'bi bi-heart';
                this.likes--;
                this.counter.textContent = this.likes;
                this.isChange = false;
            } else {
                this.icon.className = 'bi bi-heart-fill';
                this.likes++;
                this.counter.textContent = this.likes;
                this.isChange = true;
            }
        });
    }
}


customElements.define('comments-product', Comment)
export default Comment