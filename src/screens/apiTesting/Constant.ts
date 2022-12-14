export enum REQUEST {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
}

export enum METHOD {
    POST = 'POST',
    GET = 'GET',
}

export enum CATEGORY {
    EQUIPMENT = 'EQUIPMENT',
    ROBOT = 'ROBOT',
    ELEVATOR = 'ELEVATOR',
}

export type ApiConnection = {
    title: string;
    type: CATEGORY;
    mode: 'single' | 'multiple';
    component: 'select' | 'input';
};

export type ApiResource = {
    [id: string]: ApiConnection;
};

export type ConnectionType = {
    type: REQUEST;
    http: {
        method: METHOD;
        endpoint: string;
        payload: {
            [id: string]: any;
        };
        resource: {
            [id: string]: ApiConnection;
        };
    };
};

export type TemplateType = {
    key: string;
    title: {
        en: string;
        jp: string;
    };
    description: {
        en: string;
        jp: string;
    };
    category: CATEGORY;
    connection: ConnectionType;
};

export const FETCH_DATA: { [key: string]: TemplateType } = {
    xxx1: {
        key: 'xxx1',
        title: {
            en: 'Elevator status',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.ELEVATOR,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx2: {
        key: 'xxx2',
        title: {
            en: 'Elevator test 1',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.ELEVATOR,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx3: {
        key: 'xxx3',
        title: {
            en: 'Elevator test 2',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.ELEVATOR,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx4: {
        key: 'xxx4',
        title: {
            en: 'Elevator test 3',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.ELEVATOR,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx5: {
        key: 'xxx5',
        title: {
            en: 'equipment test 1',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.EQUIPMENT,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx6: {
        key: 'xxx6',
        title: {
            en: 'equipment test 2',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.EQUIPMENT,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx7: {
        key: 'xxx7',
        title: {
            en: 'equipment test 3',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.EQUIPMENT,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
    xxx8: {
        key: 'xxx8',
        title: {
            en: 'robo tutuanle',
            jp: '挙筋状態',
        },
        description: {
            en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
            jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
        },
        category: CATEGORY.ROBOT,
        connection: {
            type: REQUEST.HTTP,
            http: {
                method: METHOD.POST,
                endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                payload: {
                    facilityId: 'facilityId',
                    robotId: 'robot',
                },
                resource: {
                    xxx: {
                        title: 'facility',
                        component: 'input',
                        mode: 'single',
                        type: CATEGORY.ELEVATOR,
                    },
                },
            },
        },
    },
};
