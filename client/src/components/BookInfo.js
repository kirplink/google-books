import React from "react";

const BookInfo = (props) => {
    return (
        
        <div className="container">
            {props.books.map(data => {
                return (
                    <div className="columns bg-secondary m-2 s-rounded p-2 shadow">
                        <div className="card-image column col-2">
                            <img src={data.image} className="img-responsive" />
                        </div>
                        <div className="column col-10">
                            <div className="card-header">
                                <div className="card-title h5">{data.title}</div>
                                <div className="card-subtitle h6">{data.author}</div>
                            </div>
                            <div className="card-body">
                                {data.description}
                            </div>
                            <div className="card-footer">
                                <form action="/book/save" method="post">
                                    <input type="text" className="d-none" id="title" name="title" value={data.title}/>
                                    <input type="text" className="d-none" id="author" name="author" value={data.author}/>
                                    <input type="text" className="d-none" id="image" name="image" value={data.image}/>
                                    <input type="text" className="d-none" id="description" name="description" value={data.description}/>
                                    <input type="text" className="d-none" id="link" name="link" value={data.link}/>
                                    <input type="submit" className="btn btn-primary" onClick={props.onClick} />
                                </form>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookInfo;