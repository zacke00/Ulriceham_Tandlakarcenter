
export interface IDentist {
    name: string;
    index: number;
    title?: string;
    description?: string;
    image?: string;
}


export type DentistContextType = {
    currentDentist: IDentist[];
    setDentist: (index: number) => void;
}; 

