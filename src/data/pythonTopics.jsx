import CodeBlock from '../components/ui/CodeBlock'
import MathCard from '../components/ui/MathCard'

function PyIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">🐍 Python para Datos</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <MathCard title="¿Por qué Python?" icon="🐍" variant="yellow">
          <ul className="space-y-1.5 text-xs">
            <li>✅ El lenguaje #1 para datos y ML</li>
            <li>✅ NumPy, Pandas, Matplotlib, scikit-learn</li>
            <li>✅ Jupyter Notebooks (interactivo)</li>
            <li>✅ Fácil de aprender</li>
            <li>✅ Enorme comunidad</li>
          </ul>
        </MathCard>
        <CodeBlock title="Setup" language="python" code={`# Instalar
pip install numpy pandas matplotlib seaborn jupyter

# Iniciar Jupyter
jupyter notebook

# O usar Google Colab (gratis, nada que instalar)
# colab.research.google.com`} />
      </div>
    </div>
  )
}

function PyNumpy() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">🔢 NumPy</h2>
      <p className="text-[13px] text-chalk-cream/70">Arrays numéricos de alto rendimiento. La base de todo el ecosistema de datos.</p>
      <CodeBlock title="NumPy" language="python" code={`import numpy as np

# Crear arrays
a = np.array([1, 2, 3, 4, 5])
b = np.zeros(5)          # [0, 0, 0, 0, 0]
c = np.ones((3, 3))      # matriz 3x3 de unos
d = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
e = np.linspace(0, 1, 5) # 5 valores entre 0 y 1
r = np.random.randn(100) # 100 valores aleatorios

# Operaciones vectorizadas (sin loops!)
print(a * 2)        # [2, 4, 6, 8, 10]
print(a + b)        # suma elemento a elemento
print(a ** 2)       # [1, 4, 9, 16, 25]
print(np.sqrt(a))   # raiz cuadrada

# Estadística
print("Media:", np.mean(a))
print("Std:", np.std(a))
print("Sum:", np.sum(a))

# Indexing
print(a[0])       # 1
print(a[1:3])     # [2, 3]
print(a[a > 3])   # [4, 5] (filtro booleano)

# Reshape
m = np.arange(12).reshape(3, 4)  # matriz 3x4`} />
    </div>
  )
}

function PyPandas() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">🐼 Pandas</h2>
      <p className="text-[13px] text-chalk-cream/70">DataFrames para manipular datos tabulares. El Excel de Python.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Básico" language="python" code={`import pandas as pd

# Crear DataFrame
df = pd.DataFrame({
    'nombre': ['Ana', 'Bob', 'Eve', 'Dan'],
    'edad': [28, 34, 22, 45],
    'ciudad': ['Madrid', 'Barcelona', 'Madrid', 'Valencia'],
    'salario': [45000, 55000, 38000, 62000]
})

# Leer datos
df = pd.read_csv('datos.csv')
df = pd.read_excel('datos.xlsx')
df = pd.read_json('datos.json')

# Explorar
print(df.head())       # primeras 5 filas
print(df.info())       # tipos y nulos
print(df.describe())   # estadísticas
print(df.shape)        # (filas, columnas)
print(df.columns)      # nombres de columnas

# Seleccionar
print(df['nombre'])           # una columna
print(df[['nombre', 'edad']]) # varias columnas
print(df.iloc[0])             # primera fila
print(df.loc[df['edad'] > 30])  # filtrar`} />
        <CodeBlock title="Transformar" language="python" code={`# Filtrar
jovenes = df[df['edad'] < 30]
madrid = df[df['ciudad'] == 'Madrid']
combo = df[(df['edad'] > 25) & (df['salario'] > 40000)]

# Ordenar
df.sort_values('salario', ascending=False)

# Agrupar (como GROUP BY)
df.groupby('ciudad')['salario'].mean()
df.groupby('ciudad').agg({
    'salario': ['mean', 'max', 'count'],
    'edad': 'mean'
})

# Nuevas columnas
df['salario_mensual'] = df['salario'] / 12
df['es_senior'] = df['edad'] > 35

# Limpiar
df.dropna()                  # quitar nulos
df.fillna(0)                 # rellenar nulos
df.drop_duplicates()         # quitar duplicados
df['nombre'] = df['nombre'].str.strip().str.title()

# Guardar
df.to_csv('resultado.csv', index=False)
df.to_excel('resultado.xlsx', index=False)`} />
      </div>
    </div>
  )
}

function PyMatplotlib() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">📈 Matplotlib</h2>
      <p className="text-[13px] text-chalk-cream/70">La librería de gráficos más usada en Python.</p>
      <CodeBlock title="Gráficos" language="python" code={`import matplotlib.pyplot as plt
import numpy as np

# Línea
x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')
plt.title('Funciones trigonometricas')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()

# Barras
categorias = ['React', 'Vue', 'Angular', 'Svelte']
valores = [40, 25, 20, 15]
plt.bar(categorias, valores, color=['#61dafb', '#42b883', '#dd1b16', '#ff3e00'])
plt.title('Popularidad de Frameworks')
plt.ylabel('Porcentaje')
plt.show()

# Scatter
np.random.seed(42)
x = np.random.randn(100)
y = x * 2 + np.random.randn(100) * 0.5
plt.scatter(x, y, alpha=0.6, c='teal')
plt.title('Correlacion')
plt.xlabel('Variable X')
plt.ylabel('Variable Y')
plt.show()

# Histograma
datos = np.random.normal(100, 15, 1000)
plt.hist(datos, bins=30, color='steelblue', edgecolor='white')
plt.title('Distribucion Normal')
plt.xlabel('Valor')
plt.ylabel('Frecuencia')
plt.show()

# Subplots (multiples graficos)
fig, axes = plt.subplots(2, 2, figsize=(10, 8))
axes[0,0].plot(x, np.sin(x))
axes[0,0].set_title('Sin')
axes[0,1].bar(['A','B','C'], [3,7,5])
axes[0,1].set_title('Barras')
axes[1,0].scatter(x, y, alpha=0.5)
axes[1,0].set_title('Scatter')
axes[1,1].hist(datos, bins=20)
axes[1,1].set_title('Histograma')
plt.tight_layout()
plt.show()`} />
    </div>
  )
}

function PySeaborn() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">🎨 Seaborn</h2>
      <p className="text-[13px] text-chalk-cream/70">Matplotlib pero bonito. Gráficos estadísticos con menos código.</p>
      <CodeBlock title="Seaborn" language="python" code={`import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# Usar tema bonito
sns.set_theme(style="darkgrid")

# Dataset de ejemplo
tips = sns.load_dataset('tips')

# Scatter con regresion
sns.lmplot(data=tips, x='total_bill', y='tip', hue='smoker')
plt.title('Propina vs Total')
plt.show()

# Boxplot
sns.boxplot(data=tips, x='day', y='total_bill', hue='sex')
plt.title('Gasto por dia y genero')
plt.show()

# Heatmap de correlacion
numeric_tips = tips.select_dtypes(include='number')
sns.heatmap(numeric_tips.corr(), annot=True, cmap='coolwarm')
plt.title('Correlaciones')
plt.show()

# Distribución
sns.histplot(tips['total_bill'], kde=True)
plt.title('Distribucion de cuentas')
plt.show()

# Pairplot (todas las combinaciones)
sns.pairplot(tips, hue='smoker')
plt.show()

# Countplot (conteo por categoria)
sns.countplot(data=tips, x='day', hue='sex')
plt.title('Visitas por dia')
plt.show()`} />
    </div>
  )
}

function PyProject() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-chalk-yellow font-math">🏆 Proyecto Final</h2>
      <p className="text-[13px] text-chalk-cream/70">Análisis completo de datos: desde la pregunta hasta la visualización.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Proyecto: analizar ventas" language="python" code={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Cargar datos
df = pd.read_csv('ventas.csv')

# 2. Explorar
print(df.head())
print(df.info())
print(df.describe())

# 3. Limpiar
df = df.dropna()
df['fecha'] = pd.to_datetime(df['fecha'])
df['mes'] = df['fecha'].dt.to_period('M')

# 4. Analizar
ventas_mes = df.groupby('mes')['total'].sum()
top_productos = df.groupby('producto')['total'].sum().nlargest(10)
revenue_por_region = df.groupby('region')['total'].agg(['sum','mean','count'])

print("Revenue total:", df['total'].sum())
print("Ticket promedio:", round(df['total'].mean(), 2))
print("Mejor mes:", ventas_mes.idxmax())

# 5. Visualizar
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

ventas_mes.plot(ax=axes[0,0], title='Ventas por Mes')
top_productos.plot.barh(ax=axes[0,1], title='Top 10 Productos')
df.groupby('region')['total'].sum().plot.pie(ax=axes[1,0], title='Por Region')
sns.histplot(df['total'], bins=30, ax=axes[1,1])
axes[1,1].set_title('Distribucion de Ventas')

plt.tight_layout()
plt.savefig('reporte_ventas.png', dpi=150)
plt.show()

print("Reporte guardado!")`} />
        <div className="space-y-4">
          <MathCard title="Checklist del proyecto" icon="📋" variant="green">
            <ol className="space-y-1.5 text-xs list-decimal pl-4">
              <li>Definir preguntas de negocio</li>
              <li>Obtener y cargar datos</li>
              <li>Explorar (head, info, describe)</li>
              <li>Limpiar (nulos, duplicados, tipos)</li>
              <li>Analizar (groupby, agg, filtros)</li>
              <li>Visualizar (gráficos relevantes)</li>
              <li>Conclusiones y recomendaciones</li>
              <li>Presentar resultados</li>
            </ol>
          </MathCard>
          <MathCard title="∑ ¡Completado!" icon="🎉" variant="yellow">
            <ul className="space-y-1 text-xs">
              <li><span className="text-chalk-green">✓</span> BI — conceptos, ETL, warehouse, KPIs</li>
              <li><span className="text-chalk-green">✓</span> Data Analysis — estadística, viz, Excel, SQL</li>
              <li><span className="text-chalk-green">✓</span> Python — NumPy, Pandas, Matplotlib, Seaborn</li>
            </ul>
          </MathCard>
        </div>
      </div>
    </div>
  )
}

export const pythonTopics = {
  'py-intro': PyIntro, 'py-numpy': PyNumpy, 'py-pandas': PyPandas,
  'py-matplotlib': PyMatplotlib, 'py-seaborn': PySeaborn, 'py-project': PyProject,
}
