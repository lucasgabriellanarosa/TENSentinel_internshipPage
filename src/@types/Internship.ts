export type InternshipType = {
    title: string,
    skills: string,
    role?: string[],
    qualifications: string[],
    offer: string[]
  }

export type InternshipListType = InternshipType[]

export type InternshipContextType = {
    internshipData: InternshipListType;
    setInternshipData: React.Dispatch<React.SetStateAction<InternshipListType>>;
};