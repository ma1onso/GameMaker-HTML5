// **********************************************************************************************************************
//
// Copyright (c)2011, YoYo Games Ltd. All Rights reserved.
//
// File:            Globals.js
// Created:         16/02/2011
// Author:          Mike
// Project:         HTML5
// Description:
//
// **********************************************************************************************************************

﻿
// **********************************************************************************************
// Global
// **********************************************************************************************
  	var Pi = 3.14159265,
	CACHE_SINGLE_IMAGE = true,
	DEBUG_MODE = false,
	AUDIO_ON = true,

// os_device
	g_DeviceType = 0, 				// Actual variable
	BROWSER_TYPE_UNKNOWN = -1,
	BROWSER_IPHONE = 0,
	BROWSER_IPHONE_RETENA = 1,
	BROWSER_IPAD = 2,

// browser in upper byte.
	g_OSBrowser = 0,				// Actual variable
    BROWSER_NOT_A_BROWSER = -1,		// game is not being played in a browser.
    BROWSER_UNKNOWN = 0,			// Unknown browser...
    BROWSER_IE = 1,
    BROWSER_FIREFOX = 2,
    BROWSER_CHROME = 3,
    BROWSER_SAFARI = 4,
    BROWSER_SAFARI_MOBILE = 5,
    BROWSER_OPERA = 6,
    BROWSER_DEFAULT_ANDROID = 7,	// default android browser
    BROWSER_WINDOWS_STORE = 8,
    BROWSER_TIZEN_MOBILE = 9,       // no longer used
    BROWSER_IE_MOBILE = 10,
    BROWSER_EDGE = 11,

// os_type
	g_OSPlatform = 0,			// actual variable
	BROWSER_OS_UNKNOWN = -1,
	BROWSER_WIN32 = 0,
	BROWSER_WINDOWS = 0,
	BROWSER_MACOSX = 1,
	BROWSER_PSP = 2,
	BROWSER_IOS = 3,
	BROWSER_ANDROID = 4,
	BROWSER_SYMBIAN = 5,
	BROWSER_LINUX = 6,
	BROWSER_WINPHONE = 7,
	BROWSER_TIZEN = 8,              // no longer used
	BROWSER_WIND8NATIVE = 9,

	g_OSVersion = 0,				// Actual variable
	BROWSER_OS_VERSION = -1,		// 0 for unknown.
	
	
	ROOM_ENDOFGAME = -100,
	ROOM_RESTARTGAME    =  -200,
	ROOM_LOADGAME       =  -300,
	ROOM_ABORTGAME      =  -400,


	OBJECT_SELF = -1,          // reference to self object
	OBJECT_OTHER = -2,         // reference to other obejct in meeting
	OBJECT_ALL = -3,           // reference to all objects
	OBJECT_NOONE = -4,         // reference to no object
	OBJECT_GLOBAL = -5,        // reference to the global object
	OBJECT_LOCAL = -7,         // reference to the local object
	OBJECT_NOTSPECIFIED = -6,  // reference to non-specified object (can be local or global)


// **********************************************************************************************
// Objects
// **********************************************************************************************

// EVENTS
    EVENT_CREATE      =   0x000,
	EVENT_DESTROY     =   0x100,
	EVENT_ALARM       =   0x200,
	EVENT_STEP        =   0x300,
	EVENT_COLLISION   =   0x400,
	EVENT_KEYBOARD    =   0x500,
	EVENT_MOUSE       =   0x600,
	EVENT_OTHER       =   0x700,
	EVENT_DRAW        =   0x800,
	EVENT_KEYPRESS    =   0x900,
	EVENT_KEYRELEASE  =   0xA00,
	EVENT_TRIGGER     =   0xB00,
	EVENT_CLEAN_UP    =   0xC00,
    EVENT_GESTURE     =   0xD00,
    EVENT_PRE_CREATE  =   0xE00,

	EVENT_STEP_NORMAL         = EVENT_STEP|1,
	EVENT_STEP_BEGIN          = EVENT_STEP|2,
	EVENT_STEP_END            = EVENT_STEP|3,

	EVENT_OTHER_OUTSIDE       = EVENT_OTHER|1,
	EVENT_OTHER_BOUNDARY      = EVENT_OTHER|2,
	EVENT_OTHER_STARTGAME     = EVENT_OTHER|3,
	EVENT_OTHER_ENDGAME       = EVENT_OTHER|4,
	EVENT_OTHER_STARTROOM     = EVENT_OTHER|5,
	EVENT_OTHER_ENDROOM       = EVENT_OTHER|6,
	EVENT_OTHER_NOLIVES       = EVENT_OTHER|7,
	EVENT_OTHER_ANIMATIONEND  = EVENT_OTHER|8,
	EVENT_OTHER_ENDOFPATH     = EVENT_OTHER|9,
	EVENT_OTHER_NOHEALTH      = EVENT_OTHER|10,
	EVENT_OTHER_CLOSEBUTTON   = EVENT_OTHER|11,		

    EVENT_OTHER_USER0 = EVENT_OTHER|14,
    EVENT_OTHER_USER1 = EVENT_OTHER|15,
    EVENT_OTHER_USER2 = EVENT_OTHER|16,
    EVENT_OTHER_USER3 = EVENT_OTHER|17,
    EVENT_OTHER_USER4 = EVENT_OTHER|18,
    EVENT_OTHER_USER5 = EVENT_OTHER|19,
    EVENT_OTHER_USER6 = EVENT_OTHER|20,
    EVENT_OTHER_USER7 = EVENT_OTHER|21,
    EVENT_OTHER_USER8 = EVENT_OTHER|22,
    EVENT_OTHER_USER9 = EVENT_OTHER|23,
    EVENT_OTHER_USER10= EVENT_OTHER|24,
    EVENT_OTHER_USER11= EVENT_OTHER|25,
    EVENT_OTHER_USER12= EVENT_OTHER|26,
    EVENT_OTHER_USER13= EVENT_OTHER|27,
    EVENT_OTHER_USER14= EVENT_OTHER|28,
    EVENT_OTHER_USER15= EVENT_OTHER|29,    
    
    EVENT_OTHER_OUTSIDE_VIEW0 = EVENT_OTHER|30,
    EVENT_OTHER_OUTSIDE_VIEW1 = EVENT_OTHER|31,
    EVENT_OTHER_OUTSIDE_VIEW2 = EVENT_OTHER|32,
    EVENT_OTHER_OUTSIDE_VIEW3 = EVENT_OTHER|33,
    EVENT_OTHER_OUTSIDE_VIEW4 = EVENT_OTHER|34,
    EVENT_OTHER_OUTSIDE_VIEW5 = EVENT_OTHER|35,
    EVENT_OTHER_OUTSIDE_VIEW6 = EVENT_OTHER|36,
    EVENT_OTHER_OUTSIDE_VIEW7 = EVENT_OTHER|37,
    
    EVENT_OTHER_BOUNDARY_VIEW0 = EVENT_OTHER|40,
    EVENT_OTHER_BOUNDARY_VIEW1 = EVENT_OTHER|41,
    EVENT_OTHER_BOUNDARY_VIEW2 = EVENT_OTHER|42,
    EVENT_OTHER_BOUNDARY_VIEW3 = EVENT_OTHER|43,
    EVENT_OTHER_BOUNDARY_VIEW4 = EVENT_OTHER|44,
    EVENT_OTHER_BOUNDARY_VIEW5 = EVENT_OTHER|45,
    EVENT_OTHER_BOUNDARY_VIEW6 = EVENT_OTHER|46,
    EVENT_OTHER_BOUNDARY_VIEW7 = EVENT_OTHER|47,
    
    EVENT_OTHER_ANIMATIONUPDATE = EVENT_OTHER | 58,
    EVENT_OTHER_ANIMATIONEVENT = EVENT_OTHER | 59,
    
    EVENT_OTHER_WEB_IMAGE_LOAD = EVENT_OTHER | 60,
	EVENT_OTHER_WEB_SOUND_LOAD = EVENT_OTHER | 61,
	EVENT_OTHER_WEB_ASYNC      = EVENT_OTHER | 62,
	EVENT_OTHER_WEB_USER_INTERACTION = EVENT_OTHER | 63,
	EVENT_OTHER_NETWORKING = EVENT_OTHER | 68,

	EVENT_DRAW_GUI = EVENT_DRAW | 64,
	EVENT_DRAW_RESIZE = EVENT_DRAW | 65,
	EVENT_DRAW_BEGIN = EVENT_DRAW | 72,
	EVENT_DRAW_END = EVENT_DRAW | 73,
	EVENT_DRAW_GUI_BEGIN = EVENT_DRAW | 74,
	EVENT_DRAW_GUI_END = EVENT_DRAW | 75,
	EVENT_DRAW_PRE = EVENT_DRAW | 76,
	EVENT_DRAW_POST = EVENT_DRAW | 77,
	
	EVENT_OTHER_WEB_IAP = EVENT_OTHER | 66,
	EVENT_OTHER_SOCIAL = EVENT_OTHER | 70,
	EVENT_OTHER_PUSH_NOTIFICATION = EVENT_OTHER | 71,
	EVENT_OTHER_ASYNC_SAVE_LOAD = EVENT_OTHER | 72,
	EVENT_OTHER_AUDIO_RECORDING = EVENT_OTHER | 73,
	EVENT_OTHER_AUDIO_PLAYBACK = EVENT_OTHER | 74,
	EVENT_OTHER_SYSTEM_EVENT = EVENT_OTHER | 75,

    EVENT_OTHER_BROADCAST_MESSAGE = EVENT_OTHER | 76,

EVENT_MOUSE_LBUTTON_DOWN = EVENT_MOUSE|1,
EVENT_MOUSE_RBUTTON_DOWN = EVENT_MOUSE|2,
EVENT_MOUSE_MBUTTON_DOWN = EVENT_MOUSE|3,
EVENT_MOUSE_LBUTTON_PRESSED = EVENT_MOUSE|4,
EVENT_MOUSE_RBUTTON_PRESSED = EVENT_MOUSE|5,
EVENT_MOUSE_MBUTTON_PRESSED = EVENT_MOUSE|6,
EVENT_MOUSE_LBUTTON_RELEASED = EVENT_MOUSE|7,
EVENT_MOUSE_RBUTTON_RELEASED = EVENT_MOUSE|8,
EVENT_MOUSE_MBUTTON_RELEASED = EVENT_MOUSE|9,
EVENT_MOUSE_GLOBAL_LBUTTON_DOWN = EVENT_MOUSE|10,
EVENT_MOUSE_GLOBAL_RBUTTON_DOWN = EVENT_MOUSE|11,
EVENT_MOUSE_GLOBAL_MBUTTON_DOWN = EVENT_MOUSE|12,
EVENT_MOUSE_GLOBAL_LBUTTON_PRESSED = EVENT_MOUSE|13,
EVENT_MOUSE_GLOBAL_RBUTTON_PRESSED = EVENT_MOUSE|14,
EVENT_MOUSE_GLOBAL_MBUTTON_PRESSED = EVENT_MOUSE|15,
EVENT_MOUSE_GLOBAL_LBUTTON_RELEASED = EVENT_MOUSE|16,
EVENT_MOUSE_GLOBAL_RBUTTON_RELEASED = EVENT_MOUSE|17,
EVENT_MOUSE_GLOBAL_MBUTTON_RELEASED = EVENT_MOUSE|18,
EVENT_MOUSE_NOBUTTON = EVENT_MOUSE | 19,
EVENT_MOUSE_ENTER = EVENT_MOUSE | 20,
EVENT_MOUSE_LEAVE = EVENT_MOUSE | 21,
EVENT_MOUSE_WHEEL_UP = EVENT_MOUSE | 22,
EVENT_MOUSE_WHEEL_DOWN = EVENT_MOUSE | 23,


EVENT_ALARM_0 = EVENT_ALARM|1,
EVENT_ALARM_1 = EVENT_ALARM|2,
EVENT_ALARM_2 = EVENT_ALARM|3,
EVENT_ALARM_3 = EVENT_ALARM|4,
EVENT_ALARM_4 = EVENT_ALARM|5,
EVENT_ALARM_5 = EVENT_ALARM|6,
EVENT_ALARM_6 = EVENT_ALARM|7,
EVENT_ALARM_7 = EVENT_ALARM|8,
EVENT_ALARM_8 = EVENT_ALARM|9,
EVENT_ALARM_9 = EVENT_ALARM|10,
EVENT_ALARM_10 = EVENT_ALARM|11,
EVENT_ALARM_11 = EVENT_ALARM | 12,

EVENT_GESTURE_TAP = EVENT_GESTURE | 1,
EVENT_GESTURE_DOUBLE_TAP = EVENT_GESTURE | 2,
EVENT_GESTURE_DRAG_START = EVENT_GESTURE | 3,
EVENT_GESTURE_DRAG_MOVE = EVENT_GESTURE | 4,
EVENT_GESTURE_DRAG_END = EVENT_GESTURE | 5,
EVENT_GESTURE_FLICK = EVENT_GESTURE | 6,
EVENT_GESTURE_PINCH_START = EVENT_GESTURE | 7,
EVENT_GESTURE_PINCH_IN = EVENT_GESTURE | 8,
EVENT_GESTURE_PINCH_OUT = EVENT_GESTURE | 9,
EVENT_GESTURE_PINCH_END = EVENT_GESTURE | 10,
EVENT_GESTURE_ROTATE_START = EVENT_GESTURE | 11,
EVENT_GESTURE_ROTATING = EVENT_GESTURE | 12,
EVENT_GESTURE_ROTATE_END = EVENT_GESTURE | 13,

EVENT_GESTURE_GLOBAL_TAP = EVENT_GESTURE | 65,
EVENT_GESTURE_GLOBAL_DOUBLE_TAP = EVENT_GESTURE | 66,
EVENT_GESTURE_GLOBAL_DRAG_START = EVENT_GESTURE | 67,
EVENT_GESTURE_GLOBAL_DRAG_MOVE = EVENT_GESTURE | 68,
EVENT_GESTURE_GLOBAL_DRAG_END = EVENT_GESTURE | 69,
EVENT_GESTURE_GLOBAL_FLICK = EVENT_GESTURE | 70,
EVENT_GESTURE_GLOBAL_PINCH_START = EVENT_GESTURE | 71,
EVENT_GESTURE_GLOBAL_PINCH_IN = EVENT_GESTURE | 72,
EVENT_GESTURE_GLOBAL_PINCH_OUT = EVENT_GESTURE | 73,
EVENT_GESTURE_GLOBAL_PINCH_END = EVENT_GESTURE | 74,
EVENT_GESTURE_GLOBAL_ROTATE_START = EVENT_GESTURE | 75,
EVENT_GESTURE_GLOBAL_ROTATING = EVENT_GESTURE | 76,
EVENT_GESTURE_GLOBAL_ROTATE_END = EVENT_GESTURE | 77,



 GML_EVENT_CREATE      =   0,
 GML_EVENT_DESTROY     =   1,
 GML_EVENT_ALARM       =   2,
 GML_EVENT_STEP        =   3,
 GML_EVENT_COLLISION   =   4,
 GML_EVENT_KEYBOARD    =   5,
 GML_EVENT_MOUSE       =   6,
 GML_EVENT_OTHER       =   7,
 GML_EVENT_DRAW        =   8,
 GML_EVENT_KEYPRESS    =   9,
 GML_EVENT_KEYRELEASE  =   10,
 GML_EVENT_TRIGGER     =   11,
 GML_EVENT_CLEAN_UP    =   12,
 GML_EVENT_GESTURE     =   13,
 GML_EVENT_PRE_CREATE  =   14,



    GML_EVENT_OTHER_USER0 = 10,
    GML_EVENT_OTHER_USER1 = 11,
    GML_EVENT_OTHER_USER2 = 12,
    GML_EVENT_OTHER_USER3 = 13,
    GML_EVENT_OTHER_USER4 = 14,
    GML_EVENT_OTHER_USER5 = 15,
    GML_EVENT_OTHER_USER6 = 16,
    GML_EVENT_OTHER_USER7 = 17,
    GML_EVENT_OTHER_USER8 = 18,
    GML_EVENT_OTHER_USER9 = 19,
    GML_EVENT_OTHER_USER10 =20,
    GML_EVENT_OTHER_USER11 =21,
    GML_EVENT_OTHER_USER12 =22,
    GML_EVENT_OTHER_USER13 =23,
    GML_EVENT_OTHER_USER14 =24,
    GML_EVENT_OTHER_USER15= 25, 

GML_MOUSE_LeftButton = 0,
GML_MOUSE_RightButton = 1,
GML_MOUSE_MiddleButton = 2,
GML_MOUSE_NoButton = 3,
GML_MOUSE_LeftPressed = 4,
GML_MOUSE_RightPressed = 5,
GML_MOUSE_MiddlePressed = 6,
GML_MOUSE_LeftReleased = 7,
GML_MOUSE_RightReleased = 8,
GML_MOUSE_MiddleReleased = 9,
GML_MOUSE_MOUSEEnter = 10,
GML_MOUSE_MOUSELeave = 11,
GML_MOUSE_Joystick1Left = 16,
GML_MOUSE_Joystick1Right = 17,
GML_MOUSE_Joystick1Up = 18,
GML_MOUSE_Joystick1Down = 19,
GML_MOUSE_Joystick1Button1 = 21,
GML_MOUSE_Joystick1Button2 = 22,
GML_MOUSE_Joystick1Button3 = 23,
GML_MOUSE_Joystick1Button4 = 24,
GML_MOUSE_Joystick1Button5 = 25,
GML_MOUSE_Joystick1Button6 = 26,
GML_MOUSE_Joystick1Button7 = 27,
GML_MOUSE_Joystick1Button8 = 28,
GML_MOUSE_Joystick2Left = 31,
GML_MOUSE_Joystick2Right = 32,
GML_MOUSE_Joystick2Up = 33,
GML_MOUSE_Joystick2Down = 34,
GML_MOUSE_Joystick2Button1 = 36,
GML_MOUSE_Joystick2Button2 = 37,
GML_MOUSE_Joystick2Button3 = 38,
GML_MOUSE_Joystick2Button4 = 39,
GML_MOUSE_Joystick2Button5 = 40,
GML_MOUSE_Joystick2Button6 = 41,
GML_MOUSE_Joystick2Button7 = 42,
GML_MOUSE_Joystick2Button8 = 43,
GML_MOUSE_GlobLeftButton = 50,
GML_MOUSE_GlobRightButton = 51,
GML_MOUSE_GlobMiddleButton = 52,
GML_MOUSE_GlobLeftPressed = 53,
GML_MOUSE_GlobRightPressed = 54,
GML_MOUSE_GlobMiddlePressed = 55,
GML_MOUSE_GlobLeftReleased = 56,
GML_MOUSE_GlobRightReleased = 57,
GML_MOUSE_GlobMiddleReleased = 58,
GML_MOUSE_GML_MOUSEWheelUp = 60,
GML_MOUSE_GML_MOUSEWheelDown = 61,

GML_EVENT_GESTURE_TAP = 0,
GML_EVENT_GESTURE_DOUBLE_TAP = 1,
GML_EVENT_GESTURE_DRAG_START = 2,
GML_EVENT_GESTURE_DRAG_MOVE = 3,
GML_EVENT_GESTURE_DRAG_END = 4,
GML_EVENT_GESTURE_FLICK = 5,
GML_EVENT_GESTURE_PINCH_START = 6,
GML_EVENT_GESTURE_PINCH_IN = 7,
GML_EVENT_GESTURE_PINCH_OUT = 8,
GML_EVENT_GESTURE_PINCH_END = 9,
GML_EVENT_GESTURE_ROTATE_START = 10,
GML_EVENT_GESTURE_ROTATING = 11,
GML_EVENT_GESTURE_ROTATE_END = 12,

GML_EVENT_GESTURE_GLOBAL_TAP = 64,
GML_EVENT_GESTURE_GLOBAL_DOUBLE_TAP = 65,
GML_EVENT_GESTURE_GLOBAL_DRAG_START = 66,
GML_EVENT_GESTURE_GLOBAL_DRAG_MOVE = 67,
GML_EVENT_GESTURE_GLOBAL_DRAG_END = 68,
GML_EVENT_GESTURE_GLOBAL_FLICK = 69,
GML_EVENT_GESTURE_GLOBAL_PINCH_START = 70,
GML_EVENT_GESTURE_GLOBAL_PINCH_IN = 71,
GML_EVENT_GESTURE_GLOBAL_PINCH_OUT = 72,
GML_EVENT_GESTURE_GLOBAL_PINCH_END = 73,
GML_EVENT_GESTURE_GLOBAL_ROTATE_START = 74,
GML_EVENT_GESTURE_GLOBAL_ROTATING = 75,
GML_EVENT_GESTURE_GLOBAL_ROTATE_END = 76,

GML_EVENT_STEP_NORMAL = 0,
	GML_EVENT_STEP_BEGIN = 1,
	GML_EVENT_STEP_END = 2,

	GML_EVENT_OTHER_OUTSIDE = 0,
	GML_EVENT_OTHER_BOUNDARY = 1,
	GML_EVENT_OTHER_STARTGAME = 2,
	GML_EVENT_OTHER_ENDGAME = 3,
	GML_EVENT_OTHER_STARTROOM = 4,
	GML_EVENT_OTHER_ENDROOM = 5,
	GML_EVENT_OTHER_NOLIVES = 6,
	GML_EVENT_OTHER_ANIMATIONEND = 7,
	GML_EVENT_OTHER_ENDOFPATH = 8,
	GML_EVENT_OTHER_NOHEALTH = 9,
	GML_EVENT_OTHER_CLOSEBUTTON = 30,
	GML_EVENT_OTHER_OUTSIDE_VIEW0 = 40,
	GML_EVENT_OTHER_OUTSIDE_VIEW1 = 41,
	GML_EVENT_OTHER_OUTSIDE_VIEW2 = 42,
	GML_EVENT_OTHER_OUTSIDE_VIEW3 = 43,
	GML_EVENT_OTHER_OUTSIDE_VIEW4 = 44,
	GML_EVENT_OTHER_OUTSIDE_VIEW5 = 45,
	GML_EVENT_OTHER_OUTSIDE_VIEW6 = 46,
	GML_EVENT_OTHER_OUTSIDE_VIEW7 = 47,
	GML_EVENT_OTHER_BOUNDARY_VIEW0 = 50,
	GML_EVENT_OTHER_BOUNDARY_VIEW1 = 51,
	GML_EVENT_OTHER_BOUNDARY_VIEW2 = 52,
	GML_EVENT_OTHER_BOUNDARY_VIEW3 = 53,
	GML_EVENT_OTHER_BOUNDARY_VIEW4 = 54,
	GML_EVENT_OTHER_BOUNDARY_VIEW5 = 55,
	GML_EVENT_OTHER_BOUNDARY_VIEW6 = 56,
	GML_EVENT_OTHER_BOUNDARY_VIEW7 = 57,	
	
	GML_EVENT_OTHER_ANIMATIONUPDATE = 58,
    GML_EVENT_OTHER_ANIMATIONEVENT = 59,

	GML_ev_user0 = 10,
	GML_ev_user1 = 11,
	GML_ev_user2 = 12,
	GML_ev_user3 = 13,
	GML_ev_user4 = 14,
	GML_ev_user5 = 15,
	GML_ev_user6 = 16,
	GML_ev_user7 = 17,
	GML_ev_user8 = 18,
	GML_ev_user9 = 19,
	GML_ev_user10 = 20,
	GML_ev_user11 = 21,
	GML_ev_user12 = 22,
	GML_ev_user13 = 23,
	GML_ev_user14 = 24,
	GML_ev_user15 = 25,

	GML_EVENT_OTHER_WEB_IMAGE_LOAD = 60,
	GML_EVENT_OTHER_WEB_SOUND_LOAD = 61,
    GML_EVENT_OTHER_WEB_ASYNC = 62,
	GML_EVENT_OTHER_WEB_USER_INTERACTION = 63,
	GML_EVENT_DRAW_GUI = 64,
	GML_EVENT_DRAW_RESIZE = 65,
	GML_EVENT_OTHER_IAP = 66,
	GML_EVENT_OTHER_NETWORKING = 68,
	GML_EVENT_OTHER_SOCIAL = 70,
	GML_EVENT_OTHER_PUSH_NOTIFICATION = 71,
	GML_EVENT_OTHER_ASYNC_SAVE_LOAD = 72,
	GML_EVENT_OTHER_AUDIO_PLAYBACK = 74,
	GML_EVENT_OTHER_SYSTEM_EVENT = 75,

    GML_EVENT_OTHER_BROADCAST_MESSAGE = 76,

    GML_EVENT_KEYPRESS_NOKEY    =   EVENT_KEYPRESS|0,
    GML_EVENT_KEYPRESS_ANY   =   EVENT_KEYPRESS|1,
    GML_EVENT_KEYPRESS_ANYKEY = EVENT_KEYPRESS | 1,
    GML_EVENT_KEYPRESS_BACKSPACE = EVENT_KEYPRESS | 8,
	GML_EVENT_KEYPRESS_TAB      =   EVENT_KEYPRESS|9,
	GML_EVENT_KEYPRESS_ENTER    =   EVENT_KEYPRESS|13,
	GML_EVENT_KEYPRESS_SHIFT    =   EVENT_KEYPRESS|16,
	GML_EVENT_KEYPRESS_CTRL     =   EVENT_KEYPRESS|17,
	GML_EVENT_KEYPRESS_ALT      =   EVENT_KEYPRESS|18,
	GML_EVENT_KEYPRESS_PAUSE    =   EVENT_KEYPRESS|19,
	GML_EVENT_KEYPRESS_ESCAPE   =   EVENT_KEYPRESS|27,
	GML_EVENT_KEYPRESS_SPACE    =   EVENT_KEYPRESS|32,

	GML_EVENT_KEYPRESS_PAGEUP   =   EVENT_KEYPRESS|33,
	GML_EVENT_KEYPRESS_PAGEDOWN =   EVENT_KEYPRESS|34,
	GML_EVENT_KEYPRESS_END      =   EVENT_KEYPRESS|35,
	GML_EVENT_KEYPRESS_HOME     =   EVENT_KEYPRESS|36,
	GML_EVENT_KEYPRESS_LEFT     =   EVENT_KEYPRESS|37,
	GML_EVENT_KEYPRESS_UP       =   EVENT_KEYPRESS|38,
	GML_EVENT_KEYPRESS_RIGHT    =   EVENT_KEYPRESS|39,
	GML_EVENT_KEYPRESS_DOWN     =   EVENT_KEYPRESS|40,
	GML_EVENT_KEYPRESS_INSERT   =   EVENT_KEYPRESS|45,
	GML_EVENT_KEYPRESS_DELETE   =   EVENT_KEYPRESS|46,

	GML_EVENT_KEYPRESS_0        =   EVENT_KEYPRESS|48,
	GML_EVENT_KEYPRESS_1        =   EVENT_KEYPRESS|49,
	GML_EVENT_KEYPRESS_2        =   EVENT_KEYPRESS|50,
	GML_EVENT_KEYPRESS_3        =   EVENT_KEYPRESS|51,
	GML_EVENT_KEYPRESS_4        =   EVENT_KEYPRESS|52,
	GML_EVENT_KEYPRESS_5        =   EVENT_KEYPRESS|53,
	GML_EVENT_KEYPRESS_6        =   EVENT_KEYPRESS|54,
	GML_EVENT_KEYPRESS_7        =   EVENT_KEYPRESS|55,
	GML_EVENT_KEYPRESS_8        =   EVENT_KEYPRESS|56,
	GML_EVENT_KEYPRESS_9        =   EVENT_KEYPRESS|57,
	GML_EVENT_KEYPRESS_A        =   EVENT_KEYPRESS|65,
	GML_EVENT_KEYPRESS_B        =   EVENT_KEYPRESS|66,
	GML_EVENT_KEYPRESS_C        =   EVENT_KEYPRESS|67,
	GML_EVENT_KEYPRESS_D        =   EVENT_KEYPRESS|68,
	GML_EVENT_KEYPRESS_E        =   EVENT_KEYPRESS|69,
	GML_EVENT_KEYPRESS_F        =   EVENT_KEYPRESS|70,
	GML_EVENT_KEYPRESS_G        =   EVENT_KEYPRESS|71,
	GML_EVENT_KEYPRESS_H        =   EVENT_KEYPRESS|72,
	GML_EVENT_KEYPRESS_I        =   EVENT_KEYPRESS|73,
	GML_EVENT_KEYPRESS_J        =   EVENT_KEYPRESS|74,
	GML_EVENT_KEYPRESS_K        =   EVENT_KEYPRESS|75,
	GML_EVENT_KEYPRESS_L        =   EVENT_KEYPRESS|76,
	GML_EVENT_KEYPRESS_M        =   EVENT_KEYPRESS|77,
	GML_EVENT_KEYPRESS_N        =   EVENT_KEYPRESS|78,
	GML_EVENT_KEYPRESS_O        =   EVENT_KEYPRESS|79,
	GML_EVENT_KEYPRESS_P        =   EVENT_KEYPRESS|80,
	GML_EVENT_KEYPRESS_Q        =   EVENT_KEYPRESS|81,
	GML_EVENT_KEYPRESS_R        =   EVENT_KEYPRESS|82,
	GML_EVENT_KEYPRESS_S        =   EVENT_KEYPRESS|83,
	GML_EVENT_KEYPRESS_T        =   EVENT_KEYPRESS|84,
	GML_EVENT_KEYPRESS_U        =   EVENT_KEYPRESS|85,
	GML_EVENT_KEYPRESS_V        =   EVENT_KEYPRESS|86,
	GML_EVENT_KEYPRESS_W        =   EVENT_KEYPRESS|87,
	GML_EVENT_KEYPRESS_X        =   EVENT_KEYPRESS|88,
	GML_EVENT_KEYPRESS_Y        =   EVENT_KEYPRESS|89,
	GML_EVENT_KEYPRESS_Z        =   EVENT_KEYPRESS|90,
	GML_EVENT_KEYPRESS_F1       =   EVENT_KEYPRESS|112,
	GML_EVENT_KEYPRESS_F2       =   EVENT_KEYPRESS|113,
	GML_EVENT_KEYPRESS_F3       =   EVENT_KEYPRESS|114,
	GML_EVENT_KEYPRESS_F4       =   EVENT_KEYPRESS|115,
	GML_EVENT_KEYPRESS_F5       =   EVENT_KEYPRESS|116,
	GML_EVENT_KEYPRESS_F6       =   EVENT_KEYPRESS|117,
	GML_EVENT_KEYPRESS_F7       =   EVENT_KEYPRESS|118,
	GML_EVENT_KEYPRESS_F8       =   EVENT_KEYPRESS|119,
	GML_EVENT_KEYPRESS_F9       =   EVENT_KEYPRESS|120,
	GML_EVENT_KEYPRESS_F10      =   EVENT_KEYPRESS|121,
	GML_EVENT_KEYPRESS_F11      =   EVENT_KEYPRESS|122,
	GML_EVENT_KEYPRESS_F12      =   EVENT_KEYPRESS|123,

	// unsupported via GameMaker
	GML_EVENT_KEYPRESS_SCROLL_LOCK  =   EVENT_KEYPRESS|145,
	GML_EVENT_KEYPRESS_SEMICOLON    =   EVENT_KEYPRESS|186,
	GML_EVENT_KEYPRESS_PLUS         =   EVENT_KEYPRESS|187,
	GML_EVENT_KEYPRESS_COMMA        =   EVENT_KEYPRESS|188,
	GML_EVENT_KEYPRESS_MINUS        =   EVENT_KEYPRESS|189,
	GML_EVENT_KEYPRESS_FULLSTOP     =   EVENT_KEYPRESS|190,
	GML_EVENT_KEYPRESS_FWSLASH      =   EVENT_KEYPRESS|191,
	GML_EVENT_KEYPRESS_AT           =   EVENT_KEYPRESS|192,
	GML_EVENT_KEYPRESS_RIGHTSQBR    =   EVENT_KEYPRESS|219,
	GML_EVENT_KEYPRESS_BKSLASH      =   EVENT_KEYPRESS|220,
	GML_EVENT_KEYPRESS_LEFTSQBR     =   EVENT_KEYPRESS|221,
	GML_EVENT_KEYPRESS_HASH         =   EVENT_KEYPRESS|222,
	GML_EVENT_KEYPRESS_TILD         =   EVENT_KEYPRESS|223,

// NUMPAD
	GML_EVENT_KEYPRESS_NUM_LOCK = EVENT_KEYPRESS | 144,
	GML_EVENT_KEYPRESS_NUM_0 = EVENT_KEYPRESS | 96,
	GML_EVENT_KEYPRESS_NUM_1 = EVENT_KEYPRESS | 97,
	GML_EVENT_KEYPRESS_NUM_2 = EVENT_KEYPRESS | 98,
	GML_EVENT_KEYPRESS_NUM_3 = EVENT_KEYPRESS | 99,
	GML_EVENT_KEYPRESS_NUM_4 = EVENT_KEYPRESS | 100,
	GML_EVENT_KEYPRESS_NUM_5 = EVENT_KEYPRESS | 101,
	GML_EVENT_KEYPRESS_NUM_6 = EVENT_KEYPRESS | 102,
	GML_EVENT_KEYPRESS_NUM_7 = EVENT_KEYPRESS | 103,
	GML_EVENT_KEYPRESS_NUM_8 = EVENT_KEYPRESS | 104,
	GML_EVENT_KEYPRESS_NUM_9 = EVENT_KEYPRESS | 105,
	GML_EVENT_KEYPRESS_NUM_STAR = EVENT_KEYPRESS | 106,
	GML_EVENT_KEYPRESS_NUM_PLUS = EVENT_KEYPRESS | 107,
	GML_EVENT_KEYPRESS_NUM_MINUS = EVENT_KEYPRESS | 109,
	GML_EVENT_KEYPRESS_NUM_DOT = EVENT_KEYPRESS | 110,
	GML_EVENT_KEYPRESS_NUM_DIV = EVENT_KEYPRESS | 111,


	// KeyDOWN events...
	GML_EVENT_KEYBOARD_NOKEY = EVENT_KEYBOARD | 0,
	GML_EVENT_KEYBOARD_ANY = EVENT_KEYBOARD | 1,
	GML_EVENT_KEYBOARD_ANYKEY = EVENT_KEYBOARD | 1,
	GML_EVENT_KEYBOARD_BACKSPACE = EVENT_KEYBOARD | 8,
	GML_EVENT_KEYBOARD_TAB = EVENT_KEYBOARD | 9,
	GML_EVENT_KEYBOARD_ENTER = EVENT_KEYBOARD | 13,
	GML_EVENT_KEYBOARD_SHIFT = EVENT_KEYBOARD | 16,
	GML_EVENT_KEYBOARD_CTRL = EVENT_KEYBOARD | 17,
	GML_EVENT_KEYBOARD_ALT = EVENT_KEYBOARD | 18,
	GML_EVENT_KEYBOARD_PAUSE = EVENT_KEYBOARD | 19,
	GML_EVENT_KEYBOARD_ESCAPE = EVENT_KEYBOARD | 27,
	GML_EVENT_KEYBOARD_SPACE = EVENT_KEYBOARD | 32,

	GML_EVENT_KEYBOARD_PAGEUP = EVENT_KEYBOARD | 33,
	GML_EVENT_KEYBOARD_PAGEDOWN = EVENT_KEYBOARD | 34,
	GML_EVENT_KEYBOARD_END = EVENT_KEYBOARD | 35,
	GML_EVENT_KEYBOARD_HOME = EVENT_KEYBOARD | 36,
	GML_EVENT_KEYBOARD_LEFT = EVENT_KEYBOARD | 37,
	GML_EVENT_KEYBOARD_UP = EVENT_KEYBOARD | 38,
	GML_EVENT_KEYBOARD_RIGHT = EVENT_KEYBOARD | 39,
	GML_EVENT_KEYBOARD_DOWN = EVENT_KEYBOARD | 40,
	GML_EVENT_KEYBOARD_INSERT = EVENT_KEYBOARD | 45,
	GML_EVENT_KEYBOARD_DELETE = EVENT_KEYBOARD | 46,

	GML_EVENT_KEYBOARD_0 = EVENT_KEYBOARD | 48,
	GML_EVENT_KEYBOARD_1 = EVENT_KEYBOARD | 49,
	GML_EVENT_KEYBOARD_2 = EVENT_KEYBOARD | 50,
	GML_EVENT_KEYBOARD_3 = EVENT_KEYBOARD | 51,
	GML_EVENT_KEYBOARD_4 = EVENT_KEYBOARD | 52,
	GML_EVENT_KEYBOARD_5 = EVENT_KEYBOARD | 53,
	GML_EVENT_KEYBOARD_6 = EVENT_KEYBOARD | 54,
	GML_EVENT_KEYBOARD_7 = EVENT_KEYBOARD | 55,
	GML_EVENT_KEYBOARD_8 = EVENT_KEYBOARD | 56,
	GML_EVENT_KEYBOARD_9 = EVENT_KEYBOARD | 57,
	GML_EVENT_KEYBOARD_A = EVENT_KEYBOARD | 65,
	GML_EVENT_KEYBOARD_B = EVENT_KEYBOARD | 66,
	GML_EVENT_KEYBOARD_C = EVENT_KEYBOARD | 67,
	GML_EVENT_KEYBOARD_D = EVENT_KEYBOARD | 68,
	GML_EVENT_KEYBOARD_E = EVENT_KEYBOARD | 69,
	GML_EVENT_KEYBOARD_F = EVENT_KEYBOARD | 70,
	GML_EVENT_KEYBOARD_G = EVENT_KEYBOARD | 71,
	GML_EVENT_KEYBOARD_H = EVENT_KEYBOARD | 72,
	GML_EVENT_KEYBOARD_I = EVENT_KEYBOARD | 73,
	GML_EVENT_KEYBOARD_J = EVENT_KEYBOARD | 74,
	GML_EVENT_KEYBOARD_K = EVENT_KEYBOARD | 75,
	GML_EVENT_KEYBOARD_L = EVENT_KEYBOARD | 76,
	GML_EVENT_KEYBOARD_M = EVENT_KEYBOARD | 77,
	GML_EVENT_KEYBOARD_N = EVENT_KEYBOARD | 78,
	GML_EVENT_KEYBOARD_O = EVENT_KEYBOARD | 79,
	GML_EVENT_KEYBOARD_P = EVENT_KEYBOARD | 80,
	GML_EVENT_KEYBOARD_Q = EVENT_KEYBOARD | 81,
	GML_EVENT_KEYBOARD_R = EVENT_KEYBOARD | 82,
	GML_EVENT_KEYBOARD_S = EVENT_KEYBOARD | 83,
	GML_EVENT_KEYBOARD_T = EVENT_KEYBOARD | 84,
	GML_EVENT_KEYBOARD_U = EVENT_KEYBOARD | 85,
	GML_EVENT_KEYBOARD_V = EVENT_KEYBOARD | 86,
	GML_EVENT_KEYBOARD_W = EVENT_KEYBOARD | 87,
	GML_EVENT_KEYBOARD_X = EVENT_KEYBOARD | 88,
	GML_EVENT_KEYBOARD_Y = EVENT_KEYBOARD | 89,
	GML_EVENT_KEYBOARD_Z = EVENT_KEYBOARD | 90,
	GML_EVENT_KEYBOARD_F1 = EVENT_KEYBOARD | 112,
	GML_EVENT_KEYBOARD_F2 = EVENT_KEYBOARD | 113,
	GML_EVENT_KEYBOARD_F3 = EVENT_KEYBOARD | 114,
	GML_EVENT_KEYBOARD_F4 = EVENT_KEYBOARD | 115,
	GML_EVENT_KEYBOARD_F5 = EVENT_KEYBOARD | 116,
	GML_EVENT_KEYBOARD_F6 = EVENT_KEYBOARD | 117,
	GML_EVENT_KEYBOARD_F7 = EVENT_KEYBOARD | 118,
	GML_EVENT_KEYBOARD_F8 = EVENT_KEYBOARD | 119,
	GML_EVENT_KEYBOARD_F9 = EVENT_KEYBOARD | 120,
	GML_EVENT_KEYBOARD_F10 = EVENT_KEYBOARD | 121,
	GML_EVENT_KEYBOARD_F11 = EVENT_KEYBOARD | 122,
	GML_EVENT_KEYBOARD_F12 = EVENT_KEYBOARD | 123,

	// unsupported via GameMaker
	GML_EVENT_KEYBOARD_SCROLL_LOCK = EVENT_KEYBOARD | 145,
	GML_EVENT_KEYBOARD_SEMICOLON = EVENT_KEYBOARD | 186,
	GML_EVENT_KEYBOARD_PLUS = EVENT_KEYBOARD | 187,
	GML_EVENT_KEYBOARD_COMMA = EVENT_KEYBOARD | 188,
	GML_EVENT_KEYBOARD_MINUS = EVENT_KEYBOARD | 189,
	GML_EVENT_KEYBOARD_FULLSTOP = EVENT_KEYBOARD | 190,
	GML_EVENT_KEYBOARD_FWSLASH = EVENT_KEYBOARD | 191,
	GML_EVENT_KEYBOARD_AT = EVENT_KEYBOARD | 192,
	GML_EVENT_KEYBOARD_RIGHTSQBR = EVENT_KEYBOARD | 219,
	GML_EVENT_KEYBOARD_BKSLASH = EVENT_KEYBOARD | 220,
	GML_EVENT_KEYBOARD_LEFTSQBR = EVENT_KEYBOARD | 221,
	GML_EVENT_KEYBOARD_HASH = EVENT_KEYBOARD | 222,
	GML_EVENT_KEYBOARD_TILD = EVENT_KEYBOARD | 223,

	// NUMPAD
	GML_EVENT_KEYBOARD_NUM_LOCK = EVENT_KEYBOARD | 144,
	GML_EVENT_KEYBOARD_NUM_0 = EVENT_KEYBOARD | 96,
	GML_EVENT_KEYBOARD_NUM_1 = EVENT_KEYBOARD | 97,
	GML_EVENT_KEYBOARD_NUM_2 = EVENT_KEYBOARD | 98,
	GML_EVENT_KEYBOARD_NUM_3 = EVENT_KEYBOARD | 99,
	GML_EVENT_KEYBOARD_NUM_4 = EVENT_KEYBOARD | 100,
	GML_EVENT_KEYBOARD_NUM_5 = EVENT_KEYBOARD | 101,
	GML_EVENT_KEYBOARD_NUM_6 = EVENT_KEYBOARD | 102,
	GML_EVENT_KEYBOARD_NUM_7 = EVENT_KEYBOARD | 103,
	GML_EVENT_KEYBOARD_NUM_8 = EVENT_KEYBOARD | 104,
	GML_EVENT_KEYBOARD_NUM_9 = EVENT_KEYBOARD | 105,
	GML_EVENT_KEYBOARD_NUM_STAR = EVENT_KEYBOARD | 106,
	GML_EVENT_KEYBOARD_NUM_PLUS = EVENT_KEYBOARD | 107,
	GML_EVENT_KEYBOARD_NUM_MINUS = EVENT_KEYBOARD | 109,
	GML_EVENT_KEYBOARD_NUM_DOT = EVENT_KEYBOARD | 110,
	GML_EVENT_KEYBOARD_NUM_DIV = EVENT_KEYBOARD | 111,


	// Key Released 
	GML_EVENT_KEYRELEASE_NOKEY = EVENT_KEYRELEASE | 0,
	GML_EVENT_KEYRELEASE_ANY = EVENT_KEYRELEASE | 1,
    GML_EVENT_KEYRELEASE_ANYKEY = EVENT_KEYRELEASE | 1,
    GML_EVENT_KEYRELEASE_BACKSPACE = EVENT_KEYRELEASE | 8,
	GML_EVENT_KEYRELEASE_TAB = EVENT_KEYRELEASE | 9,
	GML_EVENT_KEYRELEASE_ENTER = EVENT_KEYRELEASE | 13,
	GML_EVENT_KEYRELEASE_SHIFT = EVENT_KEYRELEASE | 16,
	GML_EVENT_KEYRELEASE_CTRL = EVENT_KEYRELEASE | 17,
	GML_EVENT_KEYRELEASE_ALT = EVENT_KEYRELEASE | 18,
	GML_EVENT_KEYRELEASE_PAUSE = EVENT_KEYRELEASE | 19,
	GML_EVENT_KEYRELEASE_ESCAPE = EVENT_KEYRELEASE | 27,
	GML_EVENT_KEYRELEASE_SPACE = EVENT_KEYRELEASE | 32,

	GML_EVENT_KEYRELEASE_PAGEUP = EVENT_KEYRELEASE | 33,
	GML_EVENT_KEYRELEASE_PAGEDOWN = EVENT_KEYRELEASE | 34,
	GML_EVENT_KEYRELEASE_END = EVENT_KEYRELEASE | 35,
	GML_EVENT_KEYRELEASE_HOME = EVENT_KEYRELEASE | 36,
	GML_EVENT_KEYRELEASE_LEFT = EVENT_KEYRELEASE | 37,
	GML_EVENT_KEYRELEASE_UP = EVENT_KEYRELEASE | 38,
	GML_EVENT_KEYRELEASE_RIGHT = EVENT_KEYRELEASE | 39,
	GML_EVENT_KEYRELEASE_DOWN = EVENT_KEYRELEASE | 40,
	GML_EVENT_KEYRELEASE_INSERT = EVENT_KEYRELEASE | 45,
	GML_EVENT_KEYRELEASE_DELETE = EVENT_KEYRELEASE | 46,

	GML_EVENT_KEYRELEASE_0 = EVENT_KEYRELEASE | 48,
	GML_EVENT_KEYRELEASE_1 = EVENT_KEYRELEASE | 49,
	GML_EVENT_KEYRELEASE_2 = EVENT_KEYRELEASE | 50,
	GML_EVENT_KEYRELEASE_3 = EVENT_KEYRELEASE | 51,
	GML_EVENT_KEYRELEASE_4 = EVENT_KEYRELEASE | 52,
	GML_EVENT_KEYRELEASE_5 = EVENT_KEYRELEASE | 53,
	GML_EVENT_KEYRELEASE_6 = EVENT_KEYRELEASE | 54,
	GML_EVENT_KEYRELEASE_7 = EVENT_KEYRELEASE | 55,
	GML_EVENT_KEYRELEASE_8 = EVENT_KEYRELEASE | 56,
	GML_EVENT_KEYRELEASE_9 = EVENT_KEYRELEASE | 57,
	GML_EVENT_KEYRELEASE_A = EVENT_KEYRELEASE | 65,
	GML_EVENT_KEYRELEASE_B = EVENT_KEYRELEASE | 66,
	GML_EVENT_KEYRELEASE_C = EVENT_KEYRELEASE | 67,
	GML_EVENT_KEYRELEASE_D = EVENT_KEYRELEASE | 68,
	GML_EVENT_KEYRELEASE_E = EVENT_KEYRELEASE | 69,
	GML_EVENT_KEYRELEASE_F = EVENT_KEYRELEASE | 70,
	GML_EVENT_KEYRELEASE_G = EVENT_KEYRELEASE | 71,
	GML_EVENT_KEYRELEASE_H = EVENT_KEYRELEASE | 72,
	GML_EVENT_KEYRELEASE_I = EVENT_KEYRELEASE | 73,
	GML_EVENT_KEYRELEASE_J = EVENT_KEYRELEASE | 74,
	GML_EVENT_KEYRELEASE_K = EVENT_KEYRELEASE | 75,
	GML_EVENT_KEYRELEASE_L = EVENT_KEYRELEASE | 76,
	GML_EVENT_KEYRELEASE_M = EVENT_KEYRELEASE | 77,
	GML_EVENT_KEYRELEASE_N = EVENT_KEYRELEASE | 78,
	GML_EVENT_KEYRELEASE_O = EVENT_KEYRELEASE | 79,
	GML_EVENT_KEYRELEASE_P = EVENT_KEYRELEASE | 80,
	GML_EVENT_KEYRELEASE_Q = EVENT_KEYRELEASE | 81,
	GML_EVENT_KEYRELEASE_R = EVENT_KEYRELEASE | 82,
	GML_EVENT_KEYRELEASE_S = EVENT_KEYRELEASE | 83,
	GML_EVENT_KEYRELEASE_T = EVENT_KEYRELEASE | 84,
	GML_EVENT_KEYRELEASE_U = EVENT_KEYRELEASE | 85,
	GML_EVENT_KEYRELEASE_V = EVENT_KEYRELEASE | 86,
	GML_EVENT_KEYRELEASE_W = EVENT_KEYRELEASE | 87,
	GML_EVENT_KEYRELEASE_X = EVENT_KEYRELEASE | 88,
	GML_EVENT_KEYRELEASE_Y = EVENT_KEYRELEASE | 89,
	GML_EVENT_KEYRELEASE_Z = EVENT_KEYRELEASE | 90,
	GML_EVENT_KEYRELEASE_F1 = EVENT_KEYRELEASE | 112,
	GML_EVENT_KEYRELEASE_F2 = EVENT_KEYRELEASE | 113,
	GML_EVENT_KEYRELEASE_F3 = EVENT_KEYRELEASE | 114,
	GML_EVENT_KEYRELEASE_F4 = EVENT_KEYRELEASE | 115,
	GML_EVENT_KEYRELEASE_F5 = EVENT_KEYRELEASE | 116,
	GML_EVENT_KEYRELEASE_F6 = EVENT_KEYRELEASE | 117,
	GML_EVENT_KEYRELEASE_F7 = EVENT_KEYRELEASE | 118,
	GML_EVENT_KEYRELEASE_F8 = EVENT_KEYRELEASE | 119,
	GML_EVENT_KEYRELEASE_F9 = EVENT_KEYRELEASE | 120,
	GML_EVENT_KEYRELEASE_F10 = EVENT_KEYRELEASE | 121,
	GML_EVENT_KEYRELEASE_F11 = EVENT_KEYRELEASE | 122,
	GML_EVENT_KEYRELEASE_F12 = EVENT_KEYRELEASE | 123,

	// unsupported via GameMaker
	GML_EVENT_KEYRELEASE_SCROLL_LOCK = EVENT_KEYRELEASE | 145,
	GML_EVENT_KEYRELEASE_SEMICOLON = EVENT_KEYRELEASE | 186,
	GML_EVENT_KEYRELEASE_PLUS = EVENT_KEYRELEASE | 187,
	GML_EVENT_KEYRELEASE_COMMA = EVENT_KEYRELEASE | 188,
	GML_EVENT_KEYRELEASE_MINUS = EVENT_KEYRELEASE | 189,
	GML_EVENT_KEYRELEASE_FULLSTOP = EVENT_KEYRELEASE | 190,
	GML_EVENT_KEYRELEASE_FWSLASH = EVENT_KEYRELEASE | 191,
	GML_EVENT_KEYRELEASE_AT = EVENT_KEYRELEASE | 192,
	GML_EVENT_KEYRELEASE_RIGHTSQBR = EVENT_KEYRELEASE | 219,
	GML_EVENT_KEYRELEASE_BKSLASH = EVENT_KEYRELEASE | 220,
	GML_EVENT_KEYRELEASE_LEFTSQBR = EVENT_KEYRELEASE | 221,
	GML_EVENT_KEYRELEASE_HASH = EVENT_KEYRELEASE | 222,
	GML_EVENT_KEYRELEASE_TILD = EVENT_KEYRELEASE | 223,

	// NUMPAD
	GML_EVENT_KEYRELEASE_NUM_LOCK = EVENT_KEYRELEASE | 144,
	GML_EVENT_KEYRELEASE_NUM_0 = EVENT_KEYRELEASE | 96,
	GML_EVENT_KEYRELEASE_NUM_1 = EVENT_KEYRELEASE | 97,
	GML_EVENT_KEYRELEASE_NUM_2 = EVENT_KEYRELEASE | 98,
	GML_EVENT_KEYRELEASE_NUM_3 = EVENT_KEYRELEASE | 99,
	GML_EVENT_KEYRELEASE_NUM_4 = EVENT_KEYRELEASE | 100,
	GML_EVENT_KEYRELEASE_NUM_5 = EVENT_KEYRELEASE | 101,
	GML_EVENT_KEYRELEASE_NUM_6 = EVENT_KEYRELEASE | 102,
	GML_EVENT_KEYRELEASE_NUM_7 = EVENT_KEYRELEASE | 103,
	GML_EVENT_KEYRELEASE_NUM_8 = EVENT_KEYRELEASE | 104,
	GML_EVENT_KEYRELEASE_NUM_9 = EVENT_KEYRELEASE | 105,
	GML_EVENT_KEYRELEASE_NUM_STAR = EVENT_KEYRELEASE | 106,
	GML_EVENT_KEYRELEASE_NUM_PLUS = EVENT_KEYRELEASE | 107,
	GML_EVENT_KEYRELEASE_NUM_MINUS = EVENT_KEYRELEASE | 109,
	GML_EVENT_KEYRELEASE_NUM_DOT = EVENT_KEYRELEASE | 110,
	GML_EVENT_KEYRELEASE_NUM_DIV = EVENT_KEYRELEASE | 111,



    TRIGGER_START = 0,
    TRIGGER_MIDDLE = 1,
    TRIGGER_END = 2,

//BETA
    g_DrawOffset = [],

// **********************************************************************************************
// Instance
// **********************************************************************************************
MAXTIMER = 12,


// **********************************************************************************************
// Backgrounds
// **********************************************************************************************
    MAX_BACKGROUNDS = 8,
	MAX_VIEWS = 8,
	MAX_SOUNDS = 8,         // number of "duplicate" sounds to load per sound
	MAX_HIGHSCORE = 10,
	
// **********************************************************************************************	
// Color constants
// **********************************************************************************************	
    clBlack = 0x000000,
    clMaroon = 0x000080,
    clGreen = 0x008000,
    clOlive = 0x008080,
    clNavy = 0x800000,
    clPurple = 0x800080,
    clTeal = 0x808000,
    clGray = 0x808080,
    clSilver = 0xC0C0C0,
    clRed = 0x0000FF,
    clLime = 0x00FF00,
    clYellow = 0x00FFFF,
    clBlue = 0xFF0000,
    clFuchsia = 0xFF00FF,
    clAqua = 0xFFFF00,
    clLtGray = 0xC0C0C0,
    clDkGray = 0x808080,
    clWhite = 0xFFFFFF,
    clMoneyGreen = 0xC0DCC0,
    clSkyBlue = 0xF0CAA6,
    clCream = 0xF0FBFF,
    clMedGray = 0xA4A0A0,

Audio_NoAudio = -1,
Audio_Sound =0,
Audio_WebAudio=1,
//***************************************************************************************************************************
//***************************************************************************************************************************
//
//                                      actual global variables....
//
//***************************************************************************************************************************
//***************************************************************************************************************************
// Our controllers.  Assign
    global = null,						// Assign this block to NULL
	g_pObjectManager =null,
	g_pInstanceManager =null,
	g_pIOManager =null,
	g_pRoomManager =null,
	g_pBuiltIn =null,
	g_pGMFile =null,
	g_pGraphics =null,
	g_pSoundManager = null,
    g_pFontManager = null,
	g_pBackgroundManager = null,
	g_pSpriteManager = null,
	g_pTextureGroupInfoManager = null,
	g_pLayerManager = null,
	g_pEffectsManager = null,
	g_pCameraManager = null,
	g_pCollisionList =null,
	g_pPathManager =null,
	g_pTimelineManager = null,
    g_pAnimCurveManager = null,
    g_pSequenceManager = null,
    g_pTagManager = null,
	g_pASyncManager =null,
	g_pBufferManager = null,
	g_RunRoom =null,
	g_DefaultView =null,
	g_DefaultViewArray =null,
	g_CurrentView =null,
	g_ParticleTextures =null,
	g_ParticleTypes =null,
	g_ParticleSystems =null,
	g_ActiveGrids =null,
	g_ActivePriorityQueues =null,
	g_BufferStorage = null,
    g_ListCollection =null,
	g_StackCollection =null,
	g_MPGridColletion =null,
	g_ActiveMaps =null,
	g_ActiveQueues =null,
    g_Surfaces =null,
	g_pTempTPE =null,
	g_VirtualKeyDrawList =null,
	g_HighScoreValues =null,
	g_HighScoreNames =null,
	g_HiscoreCaption =null,
	g_HighscoreNobody =null,
	g_HighscoreEscape =null,
	g_HiscoreFont =null,
	g_HiscoreFontStyle =null,
	g_Arguments =null,
	g_ArgumentIndex =null,
	g_ArgumentValue =null,
	g_RootDir =null,
	g_TextFiles =null,
	g_CanvasRect =null,
	g_roomExtents =null,
	g_transRoomExtents = null,
	g_roomExtents_Copy =null,
	g_OldView_Surface =null,
	g_OldView_Surface_From =null,
	g_pCurrentView =null,
	g_pTriggerManager =null,
    g_DummyInst =null,			
	g_pProjection =null,
	g_pView =null,
	g_CurrentFrameBuffer =null,
	g_CurrentSurfaceId =-1, // for surface_get_target

	g_CurrentSurfaceIdStack =[], // ditto

	g_gmlConst =null,
	g_AudioMainVolumeNode =null,
	g_AudioMusicVolumeNode =null,
	g_WebAudioContext =null,
	g_dialogs = null,
	g_dialogName = null,
	Current_View = null,
    g_YoYoConfig = null,
    g_GUIView = null,
    g_GameMakerHTML5Dir = undefined,
    g_CustomLoadingBarCallback = undefined,
    g_LoadingCompleteCallback = undefined,
    gml_Script_gmcallback_html5_set_load_location = undefined,
    g_LoadingBarCallback = "",
    g_yyPrePostObject__ = undefined,

    g_AudioModel = Audio_Sound,
// assign to true
    g_HiscoreFontBorder =true,    
	Draw_Automatic = true,             // Whether to automatically draw the room each step

// assign to false
	g_SupportsLocalStorage= false,
	Run_Paused = false,
	g_FullScreen = false,
	g_canPlayMp3 = false,
	g_canPlayOgg =  false,
	g_VerboseOutput =  false,
	g_DebugMode =  false,
	g_AllowFullscreen =  false,
	g_SurfaceResetFlag = false,
	g_OpenGLRequired = false,
	g_CreateEventOrderSwap = false,
	g_ForceTrigger = false,
	g_InputCaught = false,
	g_DialogActive = false,
	g_InterpolatePixels = false,
	g_DoResizeEvent =  false,
	g_ToggleFullscreen = false,

//Assign a global to ZERO!
	g_RoomID = 0,
	New_Room = 0,
	Score = 0,
	Lives = 0,
	Transition_Kind = 0,
	persnumb = 0,
	DISPLAY_WIDTH = 0,
	DISPLAY_HEIGHT = 0,
	canvasMinX = 0,
	canvasMaxX = 0,
	canvasMinY = 0,
	canvasMaxY = 0,
	g_Precsision = 0,
	g_room_maxid = 0,
	g_GlobalVolume = 0,
	g_GlobalAlpha = 0,
	g_GlobalColour = 0,
	g_GlobalColour_GM =  0,
	g_GlobalColour_HTML_RGB = 0,
	g_GlobalColour_HTML_RGBA = 0,
	g_OriginalWidth = 0,
	g_OriginalHeight = 0,
	g_LastWidth = 0,
	g_LastHeight = 0,
    g_LastCanvasWidth =  0,
	g_LastCanvasHeight =  0,
	g_DynamicTileID = 0,
	g_HiscoreBackgroundColour = 0,
	g_HiscoreNewColour = 0,
	g_HiscoreOtherColour = 0,
	g_HiscoreFontSize = 0,
	g_HiscoreBackground = 0,
 
	g_AsyncUserID =  0,
	g_LastEventpObject = 0,
	g_LastEvent = 0,
	g_LastEventArrayIndex = 0,
	g_ArgumentCount = 0,
	g_ActualTextWidth = 0,
	g_ActualTextHeight = 0,

	g_AsyncPutGetID =  0,
	g_MD5CRC =  0,
	g_MD5 =  0,
	g_WadDateTime =  0,
	g_DonePingback = 0,
	
	g_WindowColour =  0,           // Colour "between" views.
	g_DefaultFont = 0,
	g_RenderTargetActive = 0,	
    g_Collision_Compatibility_Mode =false,

    g_CurrentHWCursor = 0,
    g_CurrentCursor = 0,
	g_CurrentCursorFrame =  0,
	g_GUIWidth =  0,
	g_GUIHeight =  0,
	g_GUI_Maximise = false,
	g_GUI_Xoffset = -1,
	g_GUI_Yoffset = -1,
	g_GUI_X_Scale = 1,
	g_GUI_Y_Scale = 1,
	g_transRoomExtentsDirty = true,
    cr_default = 0,
    cr_none =  0,
    cr_arrow = 0,
    cr_cross =   0,      
    cr_beam =   0,       
    cr_size_nesw = 0,    
    cr_size_ns =  0,     
    cr_size_nwse =  0,   
    cr_size_we =  0,     
    cr_uparrow = 0,      
    cr_hourglass = 0,    
    cr_drag = 0,         
    cr_nodrop =        0,
    cr_hsplit =        0,
    cr_vsplit =        0,
    cr_multidrag =     0,
    cr_sqlwait =       0,
    cr_no =               0,
    cr_appstart =      0,
    cr_help =          0,
    cr_handpoint =     0,
    cr_size_all =     	 0,
	
	c_black =  0,
	c_white =  0,
	c_red =  0,
	c_green = 0,
	c_blue =  0,
	c_blackA = 0,
	c_whiteA = 0,
	c_redA =  0,
	c_greenA =  0,
	c_blueA = 0,
    g_isZeus = 0,
    g_crcTable=[],
    g_CanvasName = 'canvas',
    g_Hex='0123456789ABCDEF';


// #############################################################################################
/// Function:<summary>
///          	Init the debug/release functions based on runtime debug paramater.
///          </summary>
// #############################################################################################
  	function InitDebugRelease() {
        //Fritz: Don't know wtf this thinks it's doing, but it's not...

	var debug = false;

	if((g_pGMFile.Options)&&  (g_pGMFile.Options.debugMode) && (g_pGMFile.Options.debugMode === true)){
		debug = true;
	}
}


// #############################################################################################
/// Function:<summary>
///             Init Fast CRC table
///          </summary>
///
/// Out:	 <returns>
///				
///			 </returns>
// #############################################################################################
function InitFastCRC( ) {
    g_crcTable = [];
	var uPoly = 0xEDB88320;
	for( var i=0; i<256; ++i) 
	{
		var uCRC = ~~i;
		for( var j=8; j>0; --j) {
			if ((uCRC & 1) !== 0) {
				uCRC = ((uCRC >> 1)&0x7fffffff) ^ uPoly;
			} // end if
			else{ 
				uCRC >>= 1;
				uCRC &= 0x7fffffff;
			}
		} // end for
		g_crcTable[i] = uCRC;
	} 
}

// #############################################################################################
/// Function:<summary>
///             Calculate a CRC of a BYTE array
///          </summary>
///
/// In:		 <param name="_pBuffer"></param>
/// Out:	 <returns>
///				The CRC of the BYTE array
///			 </returns>
// #############################################################################################
function CalcArrayCRC( _pBuffer )
{
    var _crc = 0xffffffff;
	for( var i=0;i<_pBuffer.length; i++) {
		_crc = ((_crc>>8) & 0x00ffffff) ^ g_crcTable[ (_crc ^ _pBuffer[i]) & 0xff ];
	}
	return _crc;
}


// #############################################################################################
/// Function:<summary>
///             Initialise the games globals
///          </summary>
// #############################################################################################
function    InitAboyneGlobals() {

    InitFastCRC();
    DetectBrowser();

    if(g_AudioModel!= Audio_NoAudio) {
        
        try {
        var pAudioTest = new Audio();
        pAudioTest.controls = false;
        g_canPlayMp3 = !!pAudioTest.canPlayType && pAudioTest.canPlayType('audio/mpeg') !== "";
        g_canPlayOgg = !!pAudioTest.canPlayType && pAudioTest.canPlayType('audio/ogg; codecs="vorbis"')!=="";
        pAudioTest = null;
        }
        catch(e)
        {
            //Safari on PC without quick time installed probably...
            g_canPlayMp3 = false;
            g_canPlayOgg = false;

          
        }
    }

    if (g_canPlayMp3) debug("Browser CAN play MP3");
    if (g_canPlayOgg) debug("Browser CAN play OGG");

    InitDebugRelease();

    Current_View =
    g_RoomID = 0;
    g_RunRoom = null;

	Run_Paused = false;
    New_Room = -1;

    g_OldView_Surface = new yyView();
    g_OldView_Surface_From = new yyView();
    g_DefaultView = new yyView();
    g_DefaultView.cameraID=0; //Point to the default camera
    g_GUIView = new yyView();   
    g_pCurrentView = new yyView();

	g_transRoomExtents = new YYRECT();
    g_roomExtents = new YYRECT();
    g_roomExtents_Copy = new YYRECT();
    g_DefaultView.visible = true;
    g_GUIView.visible = true;
    g_DefaultViewArray = [];
    g_DefaultViewArray[0] = g_DefaultView;

	g_ParticleChanges = []; // When a particle system changes depth
    g_ParticleTextures = [];
    g_ParticleTypes = [];
    g_ParticleSystems = [];
    g_ActiveGrids = new yyAllocate(5);
    g_ActivePriorityQueues = new yyAllocate(5);
    g_BufferStorage = new yyAllocate(5);
    g_ListCollection = new yyAllocate(5);
    g_StackCollection = new yyAllocate(5);
    g_MPGridColletion = new yyAllocate(5);
    g_ActiveMaps = new yyAllocate(5);
    g_Surfaces = new yyAllocate(5);
    g_ActiveQueues = new yyAllocate(5);
    g_pTempTPE = new yyTPageEntry();
    g_TextFiles = new yyAllocate(5);
    g_CanvasRect = new YYRECT();
    g_DummyInst = new  yyInstance(0, 0, 0, 0, false, true);     // dummy
    g_DummyInst.hagsda = "DUMMY INSTANCE";

    //BETA
    g_DrawOffset[0]=-1;
    g_DrawOffset[1]=0;
    g_DrawOffset[2]=0x00000000;
    g_DrawOffset[3]=1;
    g_DrawOffset[4]=0;
    g_DrawOffset[5]=0x00000000;
    g_DrawOffset[6]=0;
    g_DrawOffset[7]=-1;
    g_DrawOffset[8]=0x00000000;
    g_DrawOffset[9]=0;
    g_DrawOffset[10]=1;
    g_DrawOffset[11]=0x00000000;
    g_DrawOffset[12]=0;
    g_DrawOffset[13]=0;
    g_DrawOffset[14]=0xffffffff;

    g_CanvasName = "canvas";
    g_RootDir = "html5game/";
    if (typeof (g_GameMakerHTML5Dir) != "undefined") {
        g_RootDir = g_GameMakerHTML5Dir;
    } else {
        // If g_GameMakerHTML5Dir is defined, then you've overridden the settings, so ignore this.  
        if (g_pGMFile.Options && g_pGMFile.Options.GameDir) {
            g_RootDir = g_pGMFile.Options.GameDir + '/';
        } 
    }
    g_VirtualKeyDrawList = [];
	g_HighScoreValues = [];
	g_HighScoreNames = [];

	g_HiscoreCaption = "Hiscore Table";
	g_HighscoreNobody = "<Nobody>";
	g_HighscoreEscape ="Press <ESC> to Continue";
	g_HiscoreBackgroundColour = 0x000000;
	g_HiscoreBackground = -1;
	g_HiscoreNewColour = 0xffff00;
	g_HiscoreOtherColour = 0xffffff;
    g_HiscoreFont = "verdana";
    g_HiscoreFontSize = 16;
    g_HiscoreFontStyle = "";
    g_HiscoreFontBorder = true;
    
    highscore_clear();
    
    g_GUIWidth = -1;
    g_GUIHeight = -1;

    // This will allocate index 0. Surfaces need to be 1 and up (as they are used as negative sometimes).
    g_Surfaces.Alloc();

    g_Precsision = 0.0000001;
    g_DonePingback = 512;
    
    g_dialogs = [];

    g_SurfaceResetFlag =	
	g_DoResizeEvent = false;
    Draw_Automatic = true;             // Whether to automatically draw the room each step
    
    g_DialogActive = false;

    g_CurrentFrameBuffer =
    g_LastEventpObject = null;

    g_LastEvent =
    g_LastEventArrayIndex = -1;
    g_AsyncPutGetID = 0;

    g_GlobalVolume = 1.0;
    Score =0;
    Lives=-1;
    Transition_Kind=0;


    g_AsyncUserID = 0;
    persnumb =0;
 
    /*DISPLAY_WIDTH;
    DISPLAY_HEIGHT;
    canvasMinX;
    canvasMaxX;
    canvasMinY;
    canvasMaxY;*/
    g_DynamicTileID = 10000000;
    g_room_maxid = 100000;
    g_GlobalAlpha = 1.0;
    
    if(g_isZeus)
    {
        draw_set_colour(g_pGMFile.Options.DrawColour);
    }
    else
    {
        g_GlobalColour_GM = 0x00000000;
        g_GlobalColour = 0x000000; // 0xffffff;
        g_GlobalColour_HTML_RGB = GetHTMLRGB(g_GlobalColour);
        g_GlobalColour_HTML_RGBA = GetHTMLRGBA(g_GlobalColour,g_GlobalAlpha);
    }

    c_black = GetHTMLRGB(0x000000);
    c_white = GetHTMLRGB(0xffffff);
    c_red = GetHTMLRGB(0x0000ff);
    c_green = GetHTMLRGB(0x00ff00);
    c_blue = GetHTMLRGB(0xff0000);
    c_blackA = GetHTMLRGB(0xff000000);
    c_whiteA = GetHTMLRGB(0xffffffff);
    c_redA = GetHTMLRGB(0xff0000ff);
    c_greenA = GetHTMLRGB(0xff00ff00);
    c_blueA = GetHTMLRGB(0xffff0000);

    cr_default =        0;
    cr_none =           -1;
    cr_arrow =          -2;
    cr_cross =          -3;
    cr_beam =           -4;
    cr_size_nesw =      -6;
    cr_size_ns =        -7;
    cr_size_nwse =      -8;
    cr_size_we =        -9;
    cr_uparrow =        -10;
    cr_hourglass =      -11;
    cr_drag =           -12;
    cr_nodrop =         -13;
    cr_hsplit =         -14;
    cr_vsplit =         -15;
    cr_multidrag =      -16;
    cr_sqlwait =        -17;
    cr_no =             -18;
    cr_appstart =       -19;
    cr_help =           -20;
    cr_handpoint =      -21;
    cr_size_all =       -22;
    g_CurrentCursor=	-1;
    g_CurrentHWCursor = g_pGMFile.Options.showCursor ? cr_default : cr_none;
    g_CurrentCursorFrame=0;


    SupportsLocalStorage();


	if( g_pGMFile.Options && g_pGMFile.Options.showCursor===false){
		canvas.style.cursor = "none";
	}

	g_CreateEventOrderSwap = false;
	if (g_pGMFile.Options && g_pGMFile.Options.CreateEventOrder === true){
		g_CreateEventOrderSwap = true;
	}

	if (typeof gmlGlobalInit == 'function')
	{
		gmlGlobalInit();
	}
}

function Deg2Rad(_deg) { return ((_deg * Math.PI) / 180.0); }

// #############################################################################################
/// Function:<summary>
///				Very simple fMod.
///          </summary>
///
/// In:		 <param name="_x">value</param>
///			 <param name="_y">MOD to...</param>
/// Out:	 <returns>
///				Returns the remainder of dividing x by y as a float  
///			 </returns>
// #############################################################################################
function fmod(_x, _y) 
{
	if (_x === 0) return 0;
	var t = ((_x * 0x1000000) % (_y * 0x1000000));
	t = t / 0x1000000;
	return t;
}

// #############################################################################################
/// Function:<summary>
///             Simple "square" operation
///          </summary>
///
/// In:		 <param name="_x">value to square</param>
/// Out:	 <returns>
///				Squared value
///			 </returns>
// #############################################################################################
function    Sqr( _x )
{
    return _x*_x;
}

// #############################################################################################
/// Function:<summary>
///             Casts a number into a valid HTML "colour" type
///          </summary>
///
/// In:		 <param name="_col">Colour to use...</param>
/// Out:	 <returns>
///				
///			 </returns>
// #############################################################################################
function    GetHTMLRGB(_col)
{
    // var col="rgba("+(_col&0xff).toString()+","+((_col>>8)&0xff).toString()+","+((_col>>16)&0xff).toString()+","+((_col>>24)&0xff).toString()+")";
    var col = "rgb(" + ((_col>>16)&0xff).toString() + "," + ((_col>>8)&0xff).toString() + "," + (_col&0xff).toString() + ")";
    return col;
}


// #############################################################################################
/// Function:<summary>
///             Casts a number into a valid HTML "colour" type
///          </summary>
///
/// In:     <param name="_col">Colour to use...</param>
///         <param name="_alpha">Alpha to use...</param>
/// Out:    <returns>
///             The colour
///         </returns>
// ###### #######################################################################################
function    GetHTMLRGBA(_col, _alpha)
{
    var col="rgba("+((_col>>16)&0xff).toString()+","+((_col>>8)&0xff).toString()+","+(_col&0xff).toString()+","+((_alpha*255.0)&0xff).toString()+")";
    return col;
}


// #############################################################################################
/// Function:<summary>
///             Convert a degree into a radian
///          </summary>
///
/// In:		 <param name="_deg">value to conert into a radian</param>
/// Out:	 <returns>
///				
///			 </returns>
// #############################################################################################
function    RAD( _deg ){ return Pi * _deg / 180.0;}

// #############################################################################################
/// Function:<summary>
///             Convert the GameMaker colour (BGR) into a normal one (RGB)
///          </summary>
///
/// In:		 <param name="_col"></param>
/// Out:	 <returns>
///				
///			 </returns>
// #############################################################################################
function    ConvertGMColour( _col ){ return (((_col&0xff)<<16) | (_col&0xff00) | ((_col&0xff0000)>>16)); }

// #############################################################################################
/// Function:<summary>
///             Wait for a length of time.
///          </summary>
///
/// In:		 <param name="slp">Time in ms</param>
/// Out:	 <returns>
///				
///			 </returns>
// #############################################################################################
function Timing_Wait( _slp )
{
	var StartTime = YoYo_GetTimer();

	// very simple delay loop - a proper sleep would be better.
	while(_slp>0)
	{
		var CurrTime= YoYo_GetTimer();
		_slp -= (CurrTime-StartTime);
		StartTime = CurrTime;
	}
}


// #############################################################################################
/// Function:<summary>
///          	Does the "default" instance/object/all search and uses an anonymouse function
///             to do the actual work when an instance is found.
///
///             Instance_SearchLoop(inst,obj,notme,  <arg>,<arg>,<arg>,<arg>,<arg>,  pFunction() );
///
///          </summary>
///
/// In:		<param name="_pInst"></param>
///			<param name="_obj"></param>
///			<param name="_notme"></param>
/// Out:	<returns>
///				Returns an object (true/false, Instance, ID etc.) to the caller...
///			</returns>
// #############################################################################################
function Instance_SearchLoop(_pInst, _obj, _notme,  _error_code )
{
	var pool,pInst,inst,r;
    var a = arguments;
    var argc = arguments.length;
    var _pFunction = a[argc-1];

    _obj = ~ ~_obj;
    if (_obj == OBJECT_NOONE) return _error_code;

    if (_obj == OBJECT_ALL) 
    {
        pool = g_pInstanceManager.GetPool();
        for (inst = 0; inst < pool.length;inst++ )
        {
        	pInst = pool[inst];
        	if ((_notme) && (pInst == _pInst)) continue;
        	if (pInst.marked) continue;
        	if (!pInst.active) continue;

        	r = _pFunction(pInst);
        	if (r > 0) return r;
        }
    }
    else if(_obj < 100000)
    {
        // Get the object we want to collide with
        var pObj = g_pObjectManager.Get(_obj);
        if (pObj === null)  {
            return _error_code;
    }
        
        // Now get all the objects instances, including inherited.
        pool = pObj.GetRPool();
        for (inst = 0; inst < pool.length;inst++ )
        {
        	pInst = pool[inst];

        	if ((_notme) && (_pInst == pInst)) continue;
        	if (pInst.marked) continue;
        	if (!pInst.active) continue;
        	// If we HIT this instance, then return it.          
        	r = _pFunction(pInst);
        	if (r > 0) return r;
        }
    }
    else
    {
        pInst = g_pInstanceManager.IDLookup(_obj);
        if ((_notme) && (_pInst == pInst)) {
            return _error_code; // OBJECT_NOONE;
        }
        if (pInst.marked) {
            return _error_code;
        }
        if (!pInst.active) {
            return _error_code;
        }

        return _pFunction( pInst );
    }
	return _error_code;
}


// #############################################################################################
/// Function:<summary>
///          	Does the "default" instance/object/all search and uses an anonymouse function
///             to do the actual work when an instance is found.
///
///             Instance_SearchLoop(inst,obj,notme,  <arg>,<arg>,<arg>,<arg>,<arg>,  pFunction() );
///
///          </summary>
///
/// In:		<param name="_pInst"></param>
///			<param name="_obj"></param>
///			<param name="_notme"></param>
/// Out:	<returns>
///				Returns an object (true/false, Instance, ID etc.) to the caller...
///			</returns>
// #############################################################################################
function Instance_SearchLoop2(_pInst, _obj, _notme, _error_code) {
	var pool,pInst,inst,d;
	var a = arguments;
	var argc = arguments.length;
	var _pFunction = a[argc - 1];
	var dist = 10000000000;
	var id = -1;


	_obj = ~~_obj;
	if (_obj == OBJECT_NOONE) return _error_code;

	if (_obj == OBJECT_ALL)
	{
		pool = g_pInstanceManager.GetPool();
		for (inst = 0; inst < pool.length; inst++)
		{
			pInst = pool[inst];
			if ((_notme) && (pInst == _pInst)) continue;
			if (pInst.marked) continue;
			if (!pInst.active) continue;


			d = _pFunction(pInst);
			if (d < dist)
			{
				dist = d;
				//id = inst.id;
			}
		}
		if (dist != 10000000000) return dist;
	}
	else if (_obj < 100000)
	{
		// Get the object we want to collide with
		var pObj = g_pObjectManager.Get(_obj);
		if (pObj === null)
		{
			return _error_code;
		}

		// Now get all the objects instances, including inherited.
		pool = pObj.GetRPool();
		for (inst = 0; inst < pool.length; inst++)
		{
			pInst = pool[inst];

			if ((_notme) && (_pInst == pInst)) continue;
			if (pInst.marked) continue;
			if (!pInst.active) continue;

			// If we HIT this instance, then return it.          
			d = _pFunction(pInst);
			if (d < dist)
			{
				dist = d;
				//id = inst.id;
			}
			//if (r) return r;
		}
		if (dist != 10000000000) return dist;
	}
	else
	{
		pInst = g_pInstanceManager.IDLookup(_obj);
		if ((_notme) && (_pInst == pInst))
		{
			return _error_code; // OBJECT_NOONE;
		}
		if (pInst.marked)
		{
			return _error_code;
		}
		if (!pInst.active) return _error_code;

		return _pFunction(pInst);
	}
	return _error_code;
}



// #############################################################################################
/// Property: <summary>
///              Nice little browser detection function
///           </summary>
// #############################################################################################

/** @constructor */
function BrowserDetect() {

    /** @this {BrowserDetect} */	
    this.init =  function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.browser_version = this.GetBrowserVersion();
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		this.os_version = this.GetOSVersion();		
	},
	
    /** @this {BrowserDetect} */	
	this.GetBrowserVersion = function () {
	
	    // Detect IE versions
	    var userAgentStr = navigator.userAgent.toString().toLowerCase();
	    if (userAgentStr.indexOf("trident/5") > -1) {
	        return 9.0;
	    } else if (userAgentStr.indexOf("trident/6") > -1) {
	        return 10.0;
	    } else if (userAgentStr.indexOf("trident/7") > -1) {
            return 11.0;
        }
        return -1;
	},

    /** @this {BrowserDetect} */	
	this.GetOSVersion= function () {
		
	    if (navigator.appVersion.indexOf("CPU OS 5_") != -1)
		{
			return 5.0;
		} else if (navigator.appVersion.indexOf("CPU OS 4_") != -1)
		{
			return 4.0;
		} else if (navigator.appVersion.indexOf("CPU OS 3_") != -1)
		{
			return 3.0;
		} else if (navigator.appVersion.indexOf("Android 4") != -1)
		{
			return 4.0;
		} else if (navigator.appVersion.indexOf("Android 3") != -1)
		{
			return 3.0;
		} else if (navigator.appVersion.indexOf("Android 2") != -1)
		{
			return 2.0;
		} else
		{
			return BROWSER_OS_VERSION;
		}
	},


    /** @this {BrowserDetect} */	
	this.searchString= function (data) {
		for (var i = 0; i < data.length; i++)
		{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString)
			{
				if (dataString.indexOf(data[i].subString) != -1)
				{
					return data[i].identity;
				}
			}
			else if (dataProp)
			{
				return data[i].identity;
			}
		}
	},
    /** @this {BrowserDetect} */	
	this.searchVersion= function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	this.dataBrowser= [
		{
		    string: navigator.userAgent,
		    subString: "Tizen",             // Search for this
		    identity: "Tizen"               // return this
		},
		{
		    string: navigator.userAgent,
		    subString: "Edge",				// Search for this
		    identity: "Edge"					// return this
		},
        {
            string: navigator.userAgent,
            subString: "OPR",
            versionSearch: "OPR",
            identity: "Opera"
        },
		{
			string: navigator.userAgent,
			subString: "Chrome",				// Search for this
			identity: "Chrome"					// return this
		},
		{	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{ 		// default Android browser
			string: navigator.userAgent,
			subString: "KHTML",
			identity: "KHTML",
			versionSearch: "Mozilla/"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.userAgent,
			subString: "IceWeasel",
			identity: "IceWeasel"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
		    string: navigator.userAgent,
		    subString: "IEMobile",
		    identity: "IEMobile"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{   //ie11
			string: navigator.userAgent,
			subString: "Trident/",
			identity: "Explorer",
			versionSearch: "rv"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		}/*,
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}*/
	],
	this.dataOS= [
		{
		    string: navigator.userAgent,
		    subString: "Phone 8",
		    identity: "WindowsPhone8"
		},
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iPhone"
		},
		{
			string: navigator.userAgent,
			subString: "iPod",
			identity: "iPhone"
		},
		{
			string: navigator.userAgent,
			subString: "iPad",
			identity: "iPad"
		},
		{
			string: navigator.userAgent,
			subString: "Android",
			identity: "Android"
		},
		{
		    string: navigator.userAgent,
		    subString: "Tizen",
		    identity: "Tizen"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};

var yyBrowserDetect = new BrowserDetect();
// #############################################################################################
/// Function:<summary>
///             Try and detect which browser we're running on, then set BROWSER_TYPE
///
///	            BROWSER_UNKNOWN = 0,
///	            BROWSER_IE = 1,
///	            BROWSER_FIREFOX = 2,
///	            BROWSER_CHROME = 3,
///	            BROWSER_SAFARI = 4,
///	            BROWSER_OPERA = 5,
///          </summary>
///
/// Out:	 <returns>
///				BROWSER_TYPE is set
///			 </returns>
// #############################################################################################
function DetectBrowser()
{
    yyBrowserDetect.init();
    //
    // get the OS we're running on.
    //
    if( yyBrowserDetect.OS=="Windows" ){
    	g_OSPlatform = BROWSER_WIN32;
	}else if( yyBrowserDetect.OS=="Mac" ){
    	g_OSPlatform = BROWSER_MACOSX;
	}else if( yyBrowserDetect.OS=="iPhone" ){
    	g_OSPlatform = BROWSER_IOS;
	}else if( yyBrowserDetect.OS=="iPad" ){
    	g_OSPlatform = BROWSER_IOS;
    } else if (yyBrowserDetect.OS == "Android"){
    	g_OSPlatform = BROWSER_ANDROID;
    } else if (yyBrowserDetect.OS == "Linux"){
    	g_OSPlatform = BROWSER_LINUX;
	} else if( yyBrowserDetect.OS == "Tizen"){
	    g_OSPlatform = BROWSER_TIZEN;
	} else if( yyBrowserDetect.OS == "WindowsPhone8"){
	    g_OSPlatform = BROWSER_WINPHONE;
	} else
	{
	    g_OSPlatform = BROWSER_OS_UNKNOWN;
	}
	if (yyBrowserDetect.OS !== "")
	{
		debug(yyBrowserDetect.OS + " Detected(" + g_OSPlatform+")");
	}


	// Get the OS Version (should change later to a ds_map)
	g_OSVersion = yyBrowserDetect.os_version;

	//
	// Now work out the Browser and browser platform (iPhone, iPad etc.)
	//
	// BETA
    //g_DebugMode = true;
	
	g_OSBrowser = BROWSER_UNKNOWN;
	g_DeviceType = BROWSER_TYPE_UNKNOWN; 
	if (yyBrowserDetect.browser == "Explorer") {
	    debug("Internet Explorer detected");
	    g_OSBrowser = BROWSER_IE;
	} else if (yyBrowserDetect.browser == "Explorer") {
	    debug("Internet Explorer detected");
	    g_OSBrowser = BROWSER_IE;
	} else if (yyBrowserDetect.browser == "Edge") {
	    debug("Microsoft Edge detected");
	    g_OSBrowser = BROWSER_EDGE;
	} else if (yyBrowserDetect.browser == "IEMobile") {
	    debug("IE Mobile detected");
	    g_OSBrowser = BROWSER_IE_MOBILE;
	} else if (yyBrowserDetect.browser == "Firefox") {
	    debug("Firefox detected");
	    g_OSBrowser = BROWSER_FIREFOX;
	} else if (yyBrowserDetect.browser == "Chrome") {
	    debug("Chrome detected");
	    g_OSBrowser = BROWSER_CHROME;
	} else if (yyBrowserDetect.browser == "Safari") {
	    if (g_OSPlatform == BROWSER_IOS) {
	        g_OSBrowser = BROWSER_SAFARI_MOBILE;
	        g_DeviceType = BROWSER_IPHONE;
	        if (yyBrowserDetect.OS == "iPad") g_DeviceType = BROWSER_IPAD;
	        debug("Safari mobile detected");
	    } else {
	        debug("Safari detected");
	        g_OSBrowser = BROWSER_SAFARI;
	    }
	} else if (yyBrowserDetect.browser == "Opera") {
	    debug("BrowserDetect: " + BrowserDetect.OS);
	    debug("Opera detected");
	    g_OSBrowser = BROWSER_OPERA;
	} else if (yyBrowserDetect.browser == "KHTML") {
	    debug("Default Android browser detected");
	    debug("OS: " + g_OSVersion);
	    g_OSBrowser = BROWSER_DEFAULT_ANDROID;
	}
	else if (yyBrowserDetect.browser == "Tizen") {
	    g_OSBrowser = BROWSER_NOT_A_BROWSER;
	}
	else {
	    debug("Unknown Browser - Please report these strings");
	    debug("----------------------------------------------");
	    if (navigator.userAgent) debug("userAgent: " + navigator.userAgent);
	    debug("---");
	    if (navigator.vendor) debug("vendor: " + navigator.vendor);
	    debug("---");
	    if (navigator.platform) debug("platform: " + navigator.platform);
	    debug("----------------------------------------------");
	}


	if(true == g_pGMFile.Options.LocalRunAlert)
	{
		if (document.URL.substring(0, 5) == "file:")
		{
			alert("WARNING:  Running this via a file and not a web server is not advised as the browser will enable additional security, and things like files and colours won't work correctly. " +
			chr(13) + chr(13) + "Please check the FAQ for more details. " + chr(13) + chr(13) + "https://help.yoyogames.com/hc/en-us/articles/360011372851");
		}
	}
}

// #############################################################################################
/// Function:<summary>
///          	Renders browser info
///          </summary>
// #############################################################################################
function RenderBrowserInfo() {
    graphics.fillText("userAgent: " + navigator.userAgent, 10, 10);
    graphics.fillText("vendor: " + navigator.vendor, 10, 30);
    graphics.fillText("platform: " + navigator.platform, 10, 50);
}
