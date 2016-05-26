//
//  ___FileName___
//  ___ProjectName___
//
//  Created by ___Username___ on ___Date___.
//

// MARK: - Imports
import * as PresenterInterfaces from "./___StackName___PresenterInterfaces";
import { ___StackName___PresenterToInteractorInterface } from "../DataLogic/___StackName___InteractorInterfaces";
import { ___StackName___PresenterToViewInterface } from "../UserInterface/___StackName___ViewInterfaces";
import { ___StackName___PresenterToWireframeInterface } from "./___StackName___WireframeInterfaces";

export class ___StackName___Presenter implements
        PresenterInterfaces.___StackName___InteractorToPresenterInterface,
        PresenterInterfaces.___StackName___ViewToPresenterInterface,
        PresenterInterfaces.___StackName___WireframeToPresenterInterface
        {
        // MARK: - VIPER Stack
        interactor : ___StackName___PresenterToInteractorInterface;
        view : ___StackName___PresenterToViewInterface;
        wireframe : ___StackName___PresenterToWireframeInterface;

        // MARK: - Instance Variables

        // MARK: - Operational

        // MARK: - Interactor to Presenter Interface

        // MARK: - View to Presenter Interface

        // MARK: - Wireframe to Presenter Interface

}
