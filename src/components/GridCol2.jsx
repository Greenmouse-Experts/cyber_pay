
// eslint-disable-next-line react/prop-types
function GridCol2({header1, header2, text1, text2, gridcol, col1, col2}) {
  return (
    <div className={`grid-wrapper grid md:grid-cols-${gridcol} col-1 grid-rows-1 gap-6`}>
    <div className={col1 && `md:col-span-${col1}`}>
      <h3 className="h3">{header1}</h3>
      <p className="para">
      {text1}
      </p>
    </div>
    <div className={col2 && `md:col-span-${col2}`}>
      <h3 className="h3">{header2}</h3>
      <p className="para">
        {text2}
        </p>
    </div>
  </div>
  )
}

export default GridCol2