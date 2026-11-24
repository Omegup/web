export const colors = ["#FEC63A", "#FC7557", "#949CFF", "#64C67E"] as const;

export type BrandColor = (typeof colors)[number];

export const colorAt = (index: number): BrandColor => colors[index % 4];
