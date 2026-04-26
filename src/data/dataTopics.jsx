import CodeBlock from '../components/ui/CodeBlock'
import MathCard from '../components/ui/MathCard'

function DaIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">📈 ¿Qué es Data Analysis?</h2>
      <p className="text-[13px] text-chalk-cream/70">Explorar, limpiar y modelar datos para descubrir información útil y apoyar decisiones.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Tipos de análisis" icon="📋" variant="green">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-blue-light font-bold">Descriptivo</span> — ¿Qué pasó? (reportes, dashboards)</li>
            <li><span className="text-chalk-green font-bold">Diagnóstico</span> — ¿Por qué pasó? (drill-down, correlaciones)</li>
            <li><span className="text-chalk-yellow font-bold">Predictivo</span> — ¿Qué pasará? (ML, forecasting)</li>
            <li><span className="text-chalk-orange font-bold">Prescriptivo</span> — ¿Qué debemos hacer? (optimización)</li>
          </ul>
        </MathCard>
        <MathCard title="Habilidades necesarias" icon="🧠" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>📊 Excel / Google Sheets</li>
            <li>🗄️ SQL</li>
            <li>🐍 Python (Pandas, NumPy)</li>
            <li>📈 Visualización (Matplotlib, Tableau)</li>
            <li>📐 Estadística básica</li>
            <li>🧹 Limpieza de datos</li>
            <li>💬 Storytelling con datos</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function DaProcess() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">🔄 Proceso Analítico</h2>
      <MathCard title="Los 6 pasos" icon="🔄" variant="green">
        <ol className="space-y-2 text-xs list-decimal pl-4">
          <li><strong>Preguntar</strong> — Definir el problema y las preguntas</li>
          <li><strong>Recopilar</strong> — Obtener datos de las fuentes</li>
          <li><strong>Limpiar</strong> — Tratar nulos, duplicados, outliers, formatos</li>
          <li><strong>Analizar</strong> — Explorar, calcular, encontrar patrones</li>
          <li><strong>Visualizar</strong> — Crear gráficos y dashboards</li>
          <li><strong>Comunicar</strong> — Presentar hallazgos y recomendaciones</li>
        </ol>
      </MathCard>
    </div>
  )
}

function DaStats() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">📊 Estadística Básica</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Medidas centrales" icon="📐" variant="blue">
          <ul className="space-y-2 text-xs">
            <li><span className="text-chalk-yellow font-bold font-math">x̄ Media</span> — Promedio. Suma / cantidad. Sensible a outliers.</li>
            <li><span className="text-chalk-green font-bold font-math">Mediana</span> — Valor del medio al ordenar. Robusta a outliers.</li>
            <li><span className="text-chalk-blue-light font-bold font-math">Moda</span> — Valor más frecuente.</li>
          </ul>
        </MathCard>
        <MathCard title="Dispersión" icon="📏" variant="purple">
          <ul className="space-y-2 text-xs">
            <li><span className="text-chalk-orange font-bold font-math">σ Desviación estándar</span> — Qué tan dispersos están los datos.</li>
            <li><span className="text-chalk-purple font-bold font-math">Varianza</span> — Desviación al cuadrado.</li>
            <li><span className="text-chalk-green font-bold font-math">Rango</span> — Máximo - Mínimo.</li>
            <li><span className="text-chalk-blue-light font-bold font-math">Percentiles</span> — P25, P50 (mediana), P75.</li>
          </ul>
        </MathCard>
      </div>
      <CodeBlock title="Estadística con Python" language="python" code={`import numpy as np

datos = [23, 45, 12, 67, 34, 89, 56, 23, 45, 78]

print("Media:", np.mean(datos))
print("Mediana:", np.median(datos))
print("Desv std:", round(np.std(datos), 2))
print("Varianza:", round(np.var(datos), 2))
print("Min:", np.min(datos))
print("Max:", np.max(datos))
print("P25:", np.percentile(datos, 25))
print("P75:", np.percentile(datos, 75))`} />
    </div>
  )
}

function DaViz() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">📉 Visualización de Datos</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Tipos de gráficos" icon="📊" variant="green">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-blue-light font-bold">Barras</span> — Comparar categorías</li>
            <li><span className="text-chalk-green font-bold">Líneas</span> — Tendencias en el tiempo</li>
            <li><span className="text-chalk-yellow font-bold">Pie/Donut</span> — Proporción del total</li>
            <li><span className="text-chalk-purple font-bold">Scatter</span> — Correlación entre 2 variables</li>
            <li><span className="text-chalk-orange font-bold">Histograma</span> — Distribución de frecuencia</li>
            <li><span className="text-chalk-pink font-bold">Heatmap</span> — Intensidad en matriz</li>
            <li><span className="text-chalk-red font-bold">Box plot</span> — Distribución con outliers</li>
          </ul>
        </MathCard>
        <MathCard title="Principios de buen diseño" icon="🎨" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>✅ Título claro y descriptivo</li>
            <li>✅ Ejes etiquetados con unidades</li>
            <li>✅ Colores con propósito</li>
            <li>✅ Menos es más (no saturar)</li>
            <li>✅ Usar el gráfico correcto para los datos</li>
            <li>❌ Nunca 3D sin razón</li>
            <li>❌ No truncar ejes para engañar</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function DaExcel() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">📗 Excel Avanzado</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Funciones esenciales" icon="⚙️" variant="green">
          <ul className="space-y-1 text-xs font-code">
            <li>=VLOOKUP(valor, tabla, col, 0)</li>
            <li>=INDEX(rango, MATCH(valor, col, 0))</li>
            <li>=SUMIFS(sum, rango1, crit1, rango2, crit2)</li>
            <li>=COUNTIFS(rango1, crit1, rango2, crit2)</li>
            <li>=IF(AND(A1{'>'}10, B1{'<'}5), "Si", "No")</li>
            <li>=IFERROR(formula, "Error")</li>
            <li>=TEXT(fecha, "YYYY-MM")</li>
            <li>=UNIQUE(rango)</li>
            <li>=FILTER(datos, condicion)</li>
          </ul>
        </MathCard>
        <MathCard title="Tablas dinámicas" icon="📊" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li>✅ Resumen automático de grandes datasets</li>
            <li>✅ Agrupar por categorías, fechas, regiones</li>
            <li>✅ Calcular sumas, promedios, conteos</li>
            <li>✅ Filtrar y segmentar datos</li>
            <li>✅ Crear gráficos dinámicos</li>
            <li>📌 <strong>Atajo:</strong> Seleccionar datos → Insert → PivotTable</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function DaSql() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-green font-math">🗄️ SQL para Análisis</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Queries analíticos" language="sql" code={`-- Ventas por mes
SELECT
  DATE_TRUNC('month', created_at) AS mes,
  COUNT(*) AS total_ventas,
  SUM(total) AS revenue,
  AVG(total) AS ticket_promedio
FROM orders
WHERE created_at >= '2024-01-01'
GROUP BY mes
ORDER BY mes;

-- Top 10 clientes por revenue
SELECT u.name, SUM(o.total) AS total_gastado
FROM users u JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_gastado DESC LIMIT 10;

-- Retención: usuarios que compraron mes 1 y mes 2
WITH m1 AS (
  SELECT DISTINCT user_id FROM orders
  WHERE created_at BETWEEN '2024-01-01' AND '2024-01-31'
),
m2 AS (
  SELECT DISTINCT user_id FROM orders
  WHERE created_at BETWEEN '2024-02-01' AND '2024-02-29'
)
SELECT
  COUNT(m1.user_id) AS usuarios_mes1,
  COUNT(m2.user_id) AS retornaron_mes2,
  ROUND(COUNT(m2.user_id)::numeric / COUNT(m1.user_id) * 100, 1) AS retencion
FROM m1 LEFT JOIN m2 ON m1.user_id = m2.user_id;`} />
        <MathCard title="Window functions" icon="🪟" variant="purple">
          <CodeBlock title="Window" language="sql" code={`-- Running total
SELECT date, revenue,
  SUM(revenue) OVER (ORDER BY date) AS running_total
FROM daily_sales;

-- Ranking
SELECT name, revenue,
  RANK() OVER (ORDER BY revenue DESC) AS ranking
FROM sales_reps;

-- Month over month growth
SELECT month, revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev,
  ROUND((revenue - LAG(revenue) OVER (ORDER BY month))
    / LAG(revenue) OVER (ORDER BY month) * 100, 1) AS growth
FROM monthly_revenue;`} />
        </MathCard>
      </div>
    </div>
  )
}

export const dataTopics = {
  'da-intro': DaIntro, 'da-process': DaProcess, 'da-stats': DaStats,
  'da-viz': DaViz, 'da-excel': DaExcel, 'da-sql': DaSql,
}
