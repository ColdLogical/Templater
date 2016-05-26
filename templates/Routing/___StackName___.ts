//
//  ___FileName___
//  ___ProjectName___
//
//  Created by ___Username___ on ___Date___.
//

// MARK: - Imports
import * as WireframeInterfaces from "./___StackName___WireframeInterfaces";
import { ___StackName___NavigationInterface } from "../UserInterface/___StackName___ViewInterfaces";
import { ___StackName___WireframeToPresenterInterface } from "./___StackName___PresenterInterfaces";
import { ___StackName___Interactor } from "../DataLogic/___StackName___Interactor";
import { ___StackName___Presenter } from "./___StackName___Presenter";
import { ___StackName___View } from "../UserInterface/___StackName___View";

export class ___StackName___ implements
	WireframeInterfaces.___StackName___ModuleInterface,
	WireframeInterfaces.___StackName___PresenterToWireframeInterface
	{
	// MARK: - VIPER Stack
	moduleInteractor : ___StackName___Interactor;
	modulePresenter : ___StackName___Presenter;
	moduleView : ___StackName___View;

	// MARK: - Instance Variables
	delegate : WireframeInterfaces.___StackName___Delegate;
	presenter : ___StackName___WireframeToPresenterInterface;
	view : ___StackName___NavigationInterface;

	// MARK: - Initialization
	constructor() {
		this.moduleInteractor = new ___StackName___Interactor();
		this.modulePresenter = new ___StackName___Presenter();
		this.moduleView = new ___StackName___View();

		var i = this.moduleInteractor;
		var p = this.modulePresenter;
	        var v = this.moduleView;

		i.presenter = p;

		p.interactor = i;
		p.view = v;
		p.wireframe = this;

		v.presenter = p;

		this.presenter = p;
		this.view = v;
	}

	// MARK: - Operational

	// MARK: - Module Interface

	// MARK: - Wireframe Interface

}
