type PropType = {
  text?: string;
};
export default function Button({ text }: PropType) {
  return (
    <div className="bg-brown rounded-[30px] px-[18px] pt-2 pb-[9px] cursor-pointer">
      <p className="text-[10px] text-[#FFC700] ">{text ? text : 'View all'}</p>
    </div>
  );
}
