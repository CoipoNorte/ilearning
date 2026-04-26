import CodeBlock from '../components/ui/CodeBlock'
import MathCard from '../components/ui/MathCard'

function BiIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">📊 ¿Qué es Business Intelligence?</h2>
      <p className="text-[13px] text-chalk-cream/70">BI transforma datos crudos en <span className="text-chalk-blue-light font-semibold">información accionable</span> para tomar mejores decisiones de negocio.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="¿Qué hace BI?" icon="📊" variant="blue" delay={0.1}>
          <ul className="space-y-1.5 text-xs">
            <li>✅ <strong>Recopilar</strong> datos de múltiples fuentes</li>
            <li>✅ <strong>Transformar</strong> datos crudos en información</li>
            <li>✅ <strong>Visualizar</strong> en dashboards y reportes</li>
            <li>✅ <strong>Analizar</strong> tendencias y patrones</li>
            <li>✅ <strong>Decidir</strong> con base en evidencia, no intuición</li>
          </ul>
        </MathCard>
        <MathCard title="Roles en BI" icon="👥" variant="green" delay={0.2}>
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-blue-light font-bold">Data Engineer</span> — construye pipelines de datos</li>
            <li><span className="text-chalk-green font-bold">Data Analyst</span> — analiza y visualiza datos</li>
            <li><span className="text-chalk-yellow font-bold">Data Scientist</span> — modelos ML y estadística avanzada</li>
            <li><span className="text-chalk-purple font-bold">BI Developer</span> — crea dashboards y reportes</li>
            <li><span className="text-chalk-orange font-bold">Product Analyst</span> — métricas de producto</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function BiConcepts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">🔑 Conceptos Clave</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Terminología" icon="📖" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-yellow font-bold">Dataset</span> — conjunto de datos organizados</li>
            <li><span className="text-chalk-yellow font-bold">Schema</span> — estructura de los datos</li>
            <li><span className="text-chalk-yellow font-bold">Pipeline</span> — flujo de datos automatizado</li>
            <li><span className="text-chalk-yellow font-bold">Dashboard</span> — panel visual con métricas</li>
            <li><span className="text-chalk-yellow font-bold">Report</span> — documento con análisis</li>
            <li><span className="text-chalk-yellow font-bold">OLAP</span> — análisis multidimensional</li>
            <li><span className="text-chalk-yellow font-bold">OLTP</span> — transacciones del día a día</li>
          </ul>
        </MathCard>
        <MathCard title="Tipos de datos" icon="📋" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-green font-bold">Estructurados</span> — tablas SQL, Excel. Filas y columnas.</li>
            <li><span className="text-chalk-blue-light font-bold">Semi-estructurados</span> — JSON, XML, logs.</li>
            <li><span className="text-chalk-orange font-bold">No estructurados</span> — texto, imágenes, video, audio.</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function BiEtl() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">🔄 ETL (Extract, Transform, Load)</h2>
      <p className="text-[13px] text-chalk-cream/70">El proceso de mover datos desde las fuentes hasta el warehouse.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Las 3 fases" icon="🔄" variant="blue">
          <ul className="space-y-2 text-xs">
            <li><span className="text-chalk-green font-bold">Extract</span> — Sacar datos de las fuentes: DBs, APIs, archivos CSV, Excel, logs.</li>
            <li><span className="text-chalk-yellow font-bold">Transform</span> — Limpiar, normalizar, combinar, calcular. Convertir datos crudos en útiles.</li>
            <li><span className="text-chalk-blue-light font-bold">Load</span> — Cargar al Data Warehouse o Data Lake para análisis.</li>
          </ul>
        </MathCard>
        <MathCard title="Herramientas ETL" icon="🧰" variant="green">
          <ul className="space-y-1 text-xs">
            <li><span className="text-chalk-yellow font-bold">Python</span> — Pandas, PySpark. Flexible.</li>
            <li><span className="text-chalk-blue-light font-bold">dbt</span> — Transform en SQL. Moderno.</li>
            <li><span className="text-chalk-orange font-bold">Apache Airflow</span> — Orquestar pipelines.</li>
            <li><span className="text-chalk-purple font-bold">Fivetran</span> — ETL automático SaaS.</li>
            <li><span className="text-chalk-green font-bold">Talend</span> — Enterprise ETL.</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function BiWarehouse() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">🏗️ Data Warehouse</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="¿Qué es?" icon="🏗️" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li>Base de datos optimizada para ANÁLISIS (no transacciones)</li>
            <li>Datos históricos de toda la empresa centralizados</li>
            <li>Schema diseñado para queries analíticos rápidos</li>
            <li>Separado de la DB de producción</li>
          </ul>
        </MathCard>
        <MathCard title="Plataformas" icon="☁️" variant="green">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-blue-light font-bold">Snowflake</span> — El más popular. Escala infinita.</li>
            <li><span className="text-chalk-yellow font-bold">BigQuery</span> — Google. Serverless. Pago por query.</li>
            <li><span className="text-chalk-orange font-bold">Redshift</span> — AWS. Integrado con ecosistema Amazon.</li>
            <li><span className="text-chalk-purple font-bold">Databricks</span> — Data Lake + Warehouse (Lakehouse).</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function BiKpi() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">🎯 KPIs y Métricas</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Métricas de negocio" icon="💰" variant="yellow">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-yellow font-bold">Revenue</span> — Ingresos totales</li>
            <li><span className="text-chalk-yellow font-bold">MRR</span> — Monthly Recurring Revenue (SaaS)</li>
            <li><span className="text-chalk-yellow font-bold">CAC</span> — Costo de adquisición de cliente</li>
            <li><span className="text-chalk-yellow font-bold">LTV</span> — Valor de vida del cliente</li>
            <li><span className="text-chalk-yellow font-bold">Churn</span> — Tasa de cancelación</li>
            <li><span className="text-chalk-yellow font-bold">NPS</span> — Net Promoter Score (satisfacción)</li>
          </ul>
        </MathCard>
        <MathCard title="Métricas de producto" icon="📱" variant="green">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-green font-bold">DAU/MAU</span> — Usuarios activos diarios/mensuales</li>
            <li><span className="text-chalk-green font-bold">Retention</span> — Usuarios que vuelven</li>
            <li><span className="text-chalk-green font-bold">Conversion</span> — Visitantes que compran</li>
            <li><span className="text-chalk-green font-bold">Bounce Rate</span> — Se van sin interactuar</li>
            <li><span className="text-chalk-green font-bold">ARPU</span> — Revenue por usuario</li>
            <li><span className="text-chalk-green font-bold">Funnel</span> — Embudo de conversión</li>
          </ul>
        </MathCard>
      </div>
    </div>
  )
}

function BiTools() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-blue-light font-math">🧰 Herramientas BI</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="Visualización" icon="📊" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-chalk-blue-light font-bold">Power BI</span> — Microsoft. El más usado en empresas. Gratis para desktop.</li>
            <li><span className="text-chalk-yellow font-bold">Tableau</span> — El más potente para visualización. Caro.</li>
            <li><span className="text-chalk-green font-bold">Looker</span> — Google. SQL-based. Cloud.</li>
            <li><span className="text-chalk-orange font-bold">Metabase</span> — Open source. Simple. Self-hosted gratis.</li>
            <li><span className="text-chalk-purple font-bold">Superset</span> — Apache. Open source. Potente.</li>
          </ul>
        </MathCard>
        <MathCard title="Stack moderno de datos" icon="🏗️" variant="purple">
          <ol className="space-y-1 text-xs list-decimal pl-4">
            <li><strong>Fuentes</strong> — PostgreSQL, APIs, CSV, logs</li>
            <li><strong>Ingesta</strong> — Fivetran, Airbyte, custom ETL</li>
            <li><strong>Warehouse</strong> — Snowflake, BigQuery</li>
            <li><strong>Transform</strong> — dbt (SQL transforms)</li>
            <li><strong>Visualización</strong> — Power BI, Tableau, Metabase</li>
            <li><strong>Orquestación</strong> — Airflow, Dagster</li>
          </ol>
        </MathCard>
      </div>
    </div>
  )
}

export const biTopics = {
  'bi-intro': BiIntro, 'bi-concepts': BiConcepts, 'bi-etl': BiEtl,
  'bi-warehouse': BiWarehouse, 'bi-kpi': BiKpi, 'bi-tools': BiTools,
}
