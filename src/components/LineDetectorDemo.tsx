import { useState } from 'react'
import { detector } from '../data/content'

/** Comparação antes/depois: arraste (ou use as setas do teclado) para revelar as linhas detectadas pela IA. */
export function LineDetectorDemo() {
  const [pos, setPos] = useState(55)
  return (
    <div className="demo">
      <div className="compare fx" style={{ ['--pos' as string]: `${pos}%` }}>
        {/* Original à esquerda da barra, detecção à direita */}
        <img src={detector.detection} alt="A mesma página com cada linha manuscrita destacada em azul pelo detector" loading="lazy" />
        <img className="after" src={detector.document} alt="Página dupla de um processo manuscrito do século XIX" loading="lazy" />
        <span className="tag l">original</span>
        <span className="tag r">detecção</span>
        <span className="handle" aria-hidden="true" />
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Comparar o documento original com as linhas detectadas" />
      </div>
      <div className="copy fx">
        <span className="label">Veja funcionando</span>
        <h3>Do manuscrito às linhas, automaticamente.</h3>
        <p className="desc">
          O detector encontra cada linha de um processo manuscrito do século XIX e recorta uma por uma. Esses recortes alimentam o
          modelo que lê o texto. Arraste a barra para comparar.
        </p>
        <div className="crop">
          <span className="label">Primeira linha recortada</span>
          <img src={detector.line} width={472} height={48} alt="Recorte da primeira linha manuscrita detectada" loading="lazy" />
        </div>
        <div className="pipeline" aria-label="Etapas do pipeline">
          <b>YOLO</b><span>detecta as linhas</span><span>→</span><b>TrOCR</b><span>lê o texto</span><span>→</span><b>RAG</b><span>responde perguntas</span>
        </div>
      </div>
    </div>
  )
}
