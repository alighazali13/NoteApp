export function handleNoteColor() {
    const colors = [
        "bg-[#FFD6D6]",
        "bg-[#FFF2CC]",
        "bg-[#D4E2FF]",
        "bg-[#D6F5D6]",
        "bg-[#EBD6FF]",
        "bg-[#FFE4CC]",
        "bg-[#FFCCCC]",
    ];
    const color = colors[Math.floor(Math.random()*colors.length)];
    console.log(color);
    
    return color;
}
