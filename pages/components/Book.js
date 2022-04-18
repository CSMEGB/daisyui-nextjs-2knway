import React from 'react';
export default class Book extends React.Component {
  constructor(props) {
    super(props);
    const { title, id, tags } = props;
    console.log(this.id);
  }
  render() {
    console.log(this.props);
    return (
      <div class="">
        <div class="card w-96 bg-base-300 shadow-xl">
          {this.props.id}
          <figure>
            {
              <img
                src={`https://api.lorem.space/image/book?w=150&h=220&hash=${this.props.id}`}
                alt="Book 1"
              />
            }
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {this.props.title}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>Would you like to read this book?</p>
            <div class="card-actions justify-end">
              {
                <React.Fragment>
                  {this.props.tags?.split(',').map((tag) => {
                    console.log(tag);
                    return <div class="badge badge-outline">{tag.trim()}</div>;
                  })}
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
