import React,{useEffect} from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';

const InfoFormTaller = ({info,updateState}) => {
  const { error, loading, value } = useCollection(
    db.collection('modelo_auto'),
  );
  
  value && !info.infoAuto && updateState({infoAuto:value.docs[0].data()})
  return (
    <div className="container center margin-option">
      <div className="card p-10">
        <div className="card-body center ">
          <div className="m-6 center  margin">
            <img className="tecnico-ico  margin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAF6xDnNfApwZO9E5TuFY-04Bte7QzBfpgJXjftF8J1nVAXzJQQ" alt="Smiley face" />
            <h2>Proveedor</h2>
          </div>
          <div className="m-6 center margin">
          <img className="casos-icon  margin" src="https://i.ibb.co/VqsFFnr/casos.png" alt="Smiley face" />
          <h2>Mis Casos</h2>
          </div>
        </div>
      </div>

      <div>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          <div><p className="col-12">Información del Auto</p></div>
          {value.docs.map(doc => (
        <div>
           <div className="row  border border-primary" data-testid="item" key={doc.id}>
            <div className="col-5">
                <p>Placa : {doc.data().placa}</p>
                <p>Marca : {doc.data().marca}</p>
                <p>Modelo : {doc.data().modelo}</p>
                <p>Año : {doc.data().año}</p>
            </div>
            <div className="col-7">
             <p>N° Motor : {doc.data().nmotor}</p>
             <p>KM: {doc.data().km}</p>
             <p>Imagen :</p><img src={doc.data().imagen} className="img mb-5"/>
            </div>
            </div>
            <div className="row">
            <div><p className="col-12">Información del Taller</p></div>
              <div className="col-12  border border-danger">
              <span>
              <p>Nombre del taller : {doc.data().taller}</p>
              <p>teléfono : {doc.data().telf}</p>
              </span>
              
              </div>
            
            </div>
            
            </div>
            
          ))}
          
        </span>
      
      )}
      </div>
    </div>
  );
};

export default InfoFormTaller;
