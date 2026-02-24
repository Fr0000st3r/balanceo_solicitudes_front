const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'https://api-frost.onrender.com/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const userId = localStorage.getItem('user_id');

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers as any,
    };

    if (userId) {
        headers['X-User-Id'] = userId;
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'API Error');
        }

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export const auth = {
    login: (credentials: any) => apiFetch('/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    }),
};

export const solicitudes = {
    getAll: (params: any = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiFetch(`/solicitudes?${query}`);
    },
    getOne: (id: string | number) => apiFetch(`/solicitudes/${id}`),
    create: (data: any) => apiFetch('/solicitudes', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    cancel: (id: string | number) => apiFetch(`/solicitudes/${id}/cancelar`, {
        method: 'PUT',
    }),
};

export const reportes = {
    getPorUsuario: (params: any = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiFetch(`/reportes/solicitudes-por-usuario?${query}`);
    },
    getPorDia: () => apiFetch('/reportes/solicitudes-por-dia'),
    getDetallePorUsuario: (id: string | number, params: any = {}) => {
        const query = new URLSearchParams(params).toString();
        return apiFetch(`/reportes/solicitudes-por-usuario/${id}?${query}`);
    },
};

export const configuracion = {
    getAll: () => apiFetch('/configuracion-carga'),
    create: (data: any) => apiFetch('/configuracion-carga', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};
