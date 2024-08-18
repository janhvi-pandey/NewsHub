import React from 'react';

const Newsitem = (props) => {
  return (
    <div>
      <div 
        className={`card my-5 mx-2 ${props.mode === 'dark' ? 'bg-dark text-white border border-light' : 'bg-light text-dark border border-dark'}`} 
        style={{ 
          width: '92.5%', 
          height: '400px',
          color: props.mode === 'dark' ? 'white' : '#191919'
        }}
      >
        <img
          src={props.imageurl ? props.imageurl : 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw'}
          height='185'

          className='card-img-top'
          alt='News'
          style={{ objectFit: 'cover' }} 
        />
        <div className="card-body" style={{ overflow: 'hidden' }}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill" style={{background:'linear-gradient(to right, #00c6ff, #0072ff)',color:'#111'}}>
            {props.source}
          </span>
         
          <h6 className='card-title' style={{ fontSize: '1rem', height:'45px', overflow: 'hidden',  }}>
            {props.title}...
          </h6>
          <p className='card-text' style={{ fontSize: '0.8rem', height:'35px', overflow: 'hidden', marginBottom:'5px'}}>
            {props.description}...
          </p>
          <p className='card-text' style={{color: props.mode === 'dark' ? 'white' : '#191919'}}>
            {props.source_icon && (
              <img
                src={props.source_icon}
                alt={`${props.source} icon`}
                style={{ height: '15px', width: '18px', marginRight: '10px' ,}}
              />
            )}
            <small style={{fontSize: '0.75rem',}} >By {props.source}</small><br />
            <small style={{fontSize: '0.75rem',}}>
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a 
            href={props.newsurl} 
            target='_blank' 
            rel='noreferrer' 
            className="btn btn-sm text-white" 
            style={{
              background: 'linear-gradient(to right, #00c6ff, #0072ff)', 
              width: '6rem', 
              height: '2rem', 
              border: '1px solid black', 
              borderRadius: '14px',
              marginBottom:'1px'
            }}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
