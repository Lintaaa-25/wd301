interface Project {
  id: number;
  name: string;
  description?: string;
}

export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type ProjectsActions =
  | { type: 'FETCH_PROJECTS_REQUEST' }
  | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
  | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
  | { type: 'ADD_PROJECT_SUCCESS'; payload: Project }

export const initialState: ProjectsState = {
  projects: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const reducer = (
  state: ProjectsState = initialState,
  action: ProjectsActions
): ProjectsState => {
  switch (action.type) {
    case "FETCH_PROJECTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: '',
      };
    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
        isError: false,
        errorMessage: '',
      };
    case "FETCH_PROJECTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case 'ADD_PROJECT_SUCCESS':  
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};
