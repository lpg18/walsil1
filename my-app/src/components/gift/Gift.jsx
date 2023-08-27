import React from 'react'
import './gift.css'

const Gift = () => {
    return (
        <section id="gift">
            <div className="container gift-title">
                <h3>Regalos</h3>
            </div>
            <div className="container gift-text">
                <h5>Debido a que ya contamos con todo lo necesario para nuestra casa; ¡Ya pensamos en la luna de Miel, el Ferrari y el Velero!; Ahora
                    lo unico que nos falta ¡Es el dinero!.
                    Por eso les sugerimos si desean hacernos un regalo, este podrán realizarlo en efectivo colocándolo en un sobre y depositarlo en el buzón
                    que encontraran en el salón o mediante transferencia bancaria a la cuenta:
                </h5>
                <table>
                    <tr>
                        <th colspan="2" class="row100">Banco Galicia</th>
                    </tr>
                    <tr>
                        <th colspan="2" class="row100">Walter Guillermo Ramos</th>
                    </tr>
                    <tr class="two-column">
                        <th>DU:</th>
                        <td>29496701</td>
                    </tr>
                    <tr class="two-column">
                        <th>CTA:</th>
                        <td>4192836-8 002-0</td>
                    </tr>
                    <tr class="two-column">
                        <th>CBU:</th>
                        <td>0070002330 004192836804</td>
                    </tr>
                    <tr class="two-column">
                        <th>ALIAS:</th>
                        <td>MATE.SUELA.CLIMA</td>
                    </tr>
                    <tr class="two-column">
                        <th>CUIL:</th>
                        <td>20294967010</td>
                    </tr>
                </table>



            </div>

        </section>
    )
}

export default Gift