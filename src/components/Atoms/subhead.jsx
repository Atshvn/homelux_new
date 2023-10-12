export default function SubHead({ children, width, color, style }) {
  return <h2 className={`${width ? width : "w-full"} ${color ? color : "text-orange-600"} font-head text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium ${style}`}>{children}</h2>
}